import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultBuzones = [];
    for (const buzon of value) {
      if (buzon.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultBuzones.push(buzon);
      };
    };
    return resultBuzones;
  }


}