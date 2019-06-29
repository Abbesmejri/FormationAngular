import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConnexionComponent, LoginComponent, InscriptionComponent],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ConnexionModule { }
