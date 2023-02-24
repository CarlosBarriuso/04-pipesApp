import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//CAmbiar el locale de la app
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localeEs );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
