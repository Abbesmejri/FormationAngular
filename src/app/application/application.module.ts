import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application/application.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PocComponent } from './poc/poc.component';
import { GestionComponent } from './gestion/gestion.component';
import { ApplicationRoutingModule } from './application-routing.module';
import {HttpClientModule, HttpClient} from '@angular/common/http'

import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}


@NgModule({
  declarations: [ApplicationComponent, NavbarComponent, SidebarComponent, ContainerComponent, FooterComponent, SearchPipe, DashboardComponent, PocComponent, GestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ApplicationRoutingModule,
    HttpClientModule, TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      
    }})
    
  ],
  // exports:[ApplicationComponent]
})
export class ApplicationModule { }
