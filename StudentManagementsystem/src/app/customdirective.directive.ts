import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private er:ElementRef) { }

  @HostListener('mouseover') dirs(){
    this.er.nativeElement.style.color = "red"
  }
  @HostListener('mouseleave') dirs1(){
    this.er.nativeElement.style.color = "green"
  }

}
