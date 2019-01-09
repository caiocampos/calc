import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculoComponent } from './calculo/calculo.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculo', pathMatch: 'full' },
  { path: 'calculo', component: CalculoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
