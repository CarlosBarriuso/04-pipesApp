import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//CAmbiar el locale de la app
import localeEs from "@angular/common/locales/es";
import localeJa from "@angular/common/locales/ja";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localeEs );
registerLocaleData( localeJa );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
