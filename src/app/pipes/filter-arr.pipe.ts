import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArr',
  // pure:false
})
export class FilterArrPipe implements PipeTransform {

  transform(arr: Array<any>, filterProp: any, filterTerm: string): Array<Object> {
    console.log('Filtering Array');

    return arr.filter(item => item[filterProp].toLowerCase() === filterTerm.toLowerCase())
  }

}
