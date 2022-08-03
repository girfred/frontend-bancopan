import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    let newPhone = '';
    newPhone = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
    return newPhone;
  }
}
