import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'discountPrice'
})
export class DiscountPricePipe implements PipeTransform {


  constructor(private currency:CurrencyPipe){

  }
  transform(price: number,dpercentage: number, mobno:string): any {
    if(!dpercentage){
      return "Contact On " + mobno;
    }
    let discountP = 0;
    console.log(price,dpercentage)
    discountP = price - (price*(dpercentage/100));
    return this.currency.transform(discountP,"INR");
    //return discountP;
  }

}
