import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { Lista } from '../../lista';
import { BASE_URL } from '../../constantes';
import { link } from 'fs';

@Component({
  selector: 'app-nueva-lista',
  templateUrl: './nueva-lista.component.html',
  styleUrls: ['./nueva-lista.component.scss']
})
export class NuevaListaComponent implements OnInit {
  private listaNombre: String;

  constructor() {
  }

  ngOnInit(): void {
  }

  crearLista() {
    this.listaNombre = (<HTMLInputElement> document.getElementById('nombre')).value as String;
    console.log(this.listaNombre);
    if (this.listaNombre === '') {
      return;
    }
    const axios = require('axios').default;
    axios.post(`${BASE_URL}/listas?nombre=${this.listaNombre}`)
      .then((response) => {
        window.location.href = '';
      });
  }

}
