import { Directive, ElementRef, HostBinding, HostListener, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {
  @HostBinding('style.backgroundColor') backgroundColor:string;
  @Input() mouseoverColor:string="blue";
  @Input() mouseleaveColor:string="yellow";

  constructor(private element :ElementRef,private render :Renderer2) {

    // this.element.nativeElement.style.backgroundColor='#dac0c0'
    // this.element.nativeElement.style.color='blue'
    this.render.setStyle(this.element.nativeElement,"background-Color","red")
   }

  @HostListener('mouseenter') mouseover(eventData:Event){

   // this.element.nativeElement.style.backgroundColor='#dac0c0'
   this.backgroundColor=this.mouseoverColor
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){

    //this.element.nativeElement.style.backgroundColor='red'
    //this.render.setStyle(this.element.nativeElement,"background-Color","red")
       this.backgroundColor=this.mouseleaveColor
  }

}
