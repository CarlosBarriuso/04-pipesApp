import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'vuela'
})

export class VuelaPipe implements PipeTransform{
  transform( vuela:boolean ): string {
/*
    if ( enMayusculas ){
    return e.toLocaleUpperCase();
    }else{
      return e.toLocaleLowerCase();
    }*/
    // con un ternario seria:
    return (vuela) ? 'vuela' : 'no vuela';
  }


}
