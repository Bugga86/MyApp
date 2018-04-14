import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    let str="";
    for(let i=0;i<value.length;i++){
      str= value.charAt(i) +str;
    }
    return str;
  }

}
