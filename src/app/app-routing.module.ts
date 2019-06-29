import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:() => import('./application/application.module').then(m => m.ApplicationModule)},
  {path:'connexion',loadChildren:() => import('./connexion/connexion.module').then(m => m.ConnexionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
