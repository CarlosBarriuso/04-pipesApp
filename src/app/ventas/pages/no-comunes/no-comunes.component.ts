import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',

})
export class NoComunesComponent {

  //i18nSelect
  nombre:string = 'Carlos';
  genero: string = 'masculino';
  invitacioMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Ana', 'Pepe', 'Sonia', 'Federico'];
  clientesMapa = {
    '=0': 'no tenemos nigún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if (this.nombre === 'Carlos') {
      this.nombre='Yoly';
      this.genero='femenino'
    }else{
      this.nombre='Carlos';
      this.genero='masculino'
    }
  }

  borrarCliente(){
    this.clientes.shift();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Carlos',
    edad: 46,
    direccion: 'Madrid, España'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Sperman',
      vuela: true,
    },
    {
      nombre: 'Fuckman',
      vuela: false,
    },
    {
      nombre: 'Idiotaman',
      vuela: true,
    }
  ]


  //Async Pipe
  //El observable se ejecuta hasta que tiene una suscripción
  miObservable = interval(2000);//Emite valores numericos

  // recibe un callback, con la funcion resolve cuando sale bien y en caso de error el reject
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos datos de la promesa');
    }, 3500);
  });
}
