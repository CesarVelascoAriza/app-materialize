import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavegacionComponent } from '../../../App-Angular/src/app/components/navegacion/navegacion.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';

const routes: Routes = [
  {path:'',component:PresentacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
