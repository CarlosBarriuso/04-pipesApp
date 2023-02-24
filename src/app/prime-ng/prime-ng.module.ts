import { NgModule } from '@angular/core';
//Pimeng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [],
  exports: [
    CardModule,
    ButtonModule,
    MenubarModule
  ],
  imports: [

  ]
})
export class PrimeNgModule { }
