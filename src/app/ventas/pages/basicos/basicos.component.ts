import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',

})
export class BasicosComponent {

  nombreLower: string = 'carlos';
  nombreUpper: string = 'CARLOS';
  nombreCompleto: string = 'cArLoS bArRiUsO';

}
