import { Component, OnInit } from '@angular/core';

import { BASE_URL } from '../../constantes';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.scss']
})
export class EditarTareaComponent implements OnInit {
  private tareaNombre: String;
  private tareaId: String;

  constructor() { }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.tareaId = urlParams.get('id');
    console.log(this.tareaId);
  }

  editarTarea(): void {
    this.tareaNombre = (<HTMLInputElement> document.getElementById('nombre')).value as String;
    console.log(this.tareaNombre);
    if (this.tareaNombre === '') {
      return;
    }
    const axios = require('axios').default;
    axios.put(`${BASE_URL}/tareas?id=${this.tareaId}&nombre=${this.tareaNombre}`)
      .then((response) => {
        window.location.href = '';
      });
  }
}
