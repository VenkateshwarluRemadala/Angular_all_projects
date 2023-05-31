import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let str1:any="venkat"
    let str2:any=str1.split("").reverse().join("")
   
    return str2;
  }

}
