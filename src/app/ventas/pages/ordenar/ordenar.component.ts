import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  enMayuscu: boolean = false;
  ordenarPor : string = '';
  vuela: boolean = true;

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    }
  ];

  cambiar(cambiar: boolean) {
    console.log(this.enMayuscu);
    //return (this.enMayuscu) ? this.enMayuscu=false : this.enMayuscu=true;
    this.enMayuscu = !this.enMayuscu;
  }

  cambiarOrden( valor:string){
    console.log(`Valor recibido: ${valor}`);
    this.ordenarPor = valor;
  }
}
