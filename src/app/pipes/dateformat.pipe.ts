import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(value: Date): any {
    let modDate ="";
    console.log(value.getUTCDay );
    return null;
  }

}
