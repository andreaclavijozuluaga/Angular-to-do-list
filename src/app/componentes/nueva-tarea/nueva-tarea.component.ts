import { Component, OnInit } from '@angular/core';

import { BASE_URL } from '../../constantes';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.scss']
})
export class NuevaTareaComponent implements OnInit {
  private tareaNombre: String;
  private listaId: String;

  constructor() { }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.listaId = urlParams.get('lista_id');
    console.log(this.listaId);
  }

  crearTarea() {
    this.tareaNombre = (<HTMLInputElement> document.getElementById('nombre')).value as String;
    console.log(this.tareaNombre);
    if (this.tareaNombre === '') {
      return;
    }
    const axios = require('axios').default;
    axios.post(`${BASE_URL}/tareas?lista_id=${this.listaId}&nombre=${this.tareaNombre}`)
      .then((response) => {
        window.location.href = '';
      });
  }

}
