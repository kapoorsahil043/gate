import { Pipe, PipeTransform } from '@angular/core';
//import { memo } from 'memo-decorator';

@Pipe({
  name: 'addTax'
})
export class AddTaxPipe implements PipeTransform {

  //@memo()
  transform(value: number, ...args: any[]): any {
    if(value){
        return value + 10;
    }
    return value;
  }
}
