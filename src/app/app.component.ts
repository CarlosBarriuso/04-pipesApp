import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  nombre: string = 'caRlos';
  valor: number = 1000;
  obj = {
    nombre: 'Fernando'
  }

  mostrarNombre(){
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }

  cambiarNombre(){
    console.log( this.nombre );
  }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
