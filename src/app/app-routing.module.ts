import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpresupuestosComponent } from './presupuesto/addpresupuestos/addpresupuestos.component';

const routes: Routes = [

  { path:'' , component: AddpresupuestosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
