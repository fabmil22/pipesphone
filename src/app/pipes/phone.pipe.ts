import { Pipe, PipeTransform } from '@angular/core';
import { format, ParsedNumber, formatNumber } from 'libphonenumber-js';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: string): any {
    if (!value) {
      return value;
    }


    console.log('funcion pipe');
    return formatNumber(value, 'International');
  }

}
