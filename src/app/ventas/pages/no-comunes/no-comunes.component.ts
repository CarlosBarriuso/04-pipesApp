import { Component } from '@angular/core';

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

}
