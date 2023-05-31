import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
   let birth:any=new Date(value).getFullYear()
   let today:any=new Date().getFullYear()
   let age=today-birth
    return age;
  }

}
