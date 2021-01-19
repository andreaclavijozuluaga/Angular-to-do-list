import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaTareasComponent } from './componentes/vista-tareas/vista-tareas.component';
import { NuevaListaComponent } from './componentes/nueva-lista/nueva-lista.component';
import { NuevaTareaComponent } from './componentes/nueva-tarea/nueva-tarea.component';
import { EditarTareaComponent } from './componentes/editar-tarea/editar-tarea.component';

const routes: Routes = [
  { path: '', component: VistaTareasComponent },
  { path: 'nueva-lista', component: NuevaListaComponent },
  { path: 'nueva-tarea', component: NuevaTareaComponent },
  { path: 'editar-tarea', component: EditarTareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
