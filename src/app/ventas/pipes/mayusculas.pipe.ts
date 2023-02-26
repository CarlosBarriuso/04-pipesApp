import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform{
  transform( e:string, enMayusculas?:boolean ): string {
/*
    if ( enMayusculas ){
    return e.toLocaleUpperCase();
    }else{
      return e.toLocaleLowerCase();
    }*/
    // con un ternario seria:
    return (enMayusculas) ? e.toLocaleUpperCase() : e.toLocaleLowerCase();
  }


}
