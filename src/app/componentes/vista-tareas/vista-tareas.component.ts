import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Lista } from '../../lista';
import { Tarea } from '../../tarea';
import { BASE_URL } from '../../constantes';

@Component({
  selector: 'app-vista-tareas',
  templateUrl: './vista-tareas.component.html',
  styleUrls: ['./vista-tareas.component.scss']
})
export class VistaTareasComponent implements OnInit {
  public listas: Lista[];
  public tareas: Tarea[];
  public listaSeleccionada: Lista;
  public axios = require('axios').default;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const temp = this;
    temp.listas = new Array<Lista>();
    temp.tareas = new Array<Tarea>();
    temp.listaSeleccionada = {} as Lista;

    temp.axios.get(`${BASE_URL}/listas`)
      .then((response) => {
      // handle success
      temp.listas = response.data;
    })
      .then(() => {
        if (temp.listas.length > 0) {
          temp.listaSeleccionada = temp.listas[0];
          temp.axios.get(`${BASE_URL}/tareas?lista_id=${temp.listaSeleccionada.id}`)
            .then((response) => {
            temp.tareas = response.data;
          });
        }
      });
  }

  crearNuevaLista(nombre: String): void {
  }

  isActive(lista: Lista): String {
    if (lista.id === this.listaSeleccionada.id) {
      return 'is-active';
    } else {
      return '';
    }
  }

  onSelect(lista: Lista): void {
    const temp = this;

    temp.axios.get(`${BASE_URL}/tareas?lista_id=${lista.id}`)
      .then((response) => {
        temp.listaSeleccionada = lista;
        temp.tareas = response.data;
    });
  }

  tareaCompletada(tarea: Tarea): String {
    if (tarea.completado) {
      return 'tarea-completada';
    } else {
      return '';
    }
  }

  completarTarea(tarea: Tarea): void {
    const temp = this;
    const completado = !tarea.completado as boolean;

    temp.axios.put(`${BASE_URL}/completar_tarea?id=${temp.listaSeleccionada.id}&completado=${completado}`)
      .then((response) => {
        console.log(response);
        window.location.href = '';
    });
  }

  borrar(): void {
    const temp = this;

    temp.axios.delete(`${BASE_URL}/listas/${temp.listaSeleccionada.id}`)
      .then((response) => {
        console.log(response);
        window.location.href = '';
    });
  }

  editarTarea(tarea: Tarea): void {
    window.location.href = `/editar-tarea?id=${tarea.id}`;
  }

  borrarTarea(tarea: Tarea): void {
    const temp = this;
    temp.axios.delete(`${BASE_URL}/tareas?id=${tarea.id}`)
      .then((response) => {
        console.log(response);
        window.location.href = '';
    });
  }

  nuevaTarea() {
    window.location.href = `/nueva-tarea?lista_id=${this.listaSeleccionada.id}`;
  }

  checkBox(tarea : Tarea): void {
    var checkBox = document.getElementById("check");
    var text = document.getElementById("tarea-id");
    if (checkBox.checked === true){
      text.style.textDecoration = "line-through";
    } else {
    }
  }

}
