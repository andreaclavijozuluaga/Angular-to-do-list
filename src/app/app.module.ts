import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaTareasComponent } from './componentes/vista-tareas/vista-tareas.component';
import { NuevaListaComponent } from './componentes/nueva-lista/nueva-lista.component';
import { NuevaTareaComponent } from './componentes/nueva-tarea/nueva-tarea.component';
import { EditarTareaComponent } from './componentes/editar-tarea/editar-tarea.component';
@NgModule({
  declarations: [
    AppComponent,
    VistaTareasComponent,
    NuevaListaComponent,
    NuevaTareaComponent,
    EditarTareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
