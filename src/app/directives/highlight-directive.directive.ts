import { Directive, HostBinding,HostListener,Input, Output ,EventEmitter} from '@angular/core';


@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {


  constructor() { }
@Input() isMouseIn=false;
@Output() changeStyleEvent=new EventEmitter();
  // @HostBinding('className') get cssClass(){
  //   return "testStyle"
  // }

@HostBinding('class.testStyle') get cssClass(){
  return this.isMouseIn
}
@HostListener('mouseenter') mouseIn(eventData:Event){
  this.isMouseIn=true;
  this.changeStyleEvent.emit(this.isMouseIn);
}
@HostListener('mouseleave') mouseleave(eventData:Event){
  this.isMouseIn=false;
  this.changeStyleEvent.emit(this.isMouseIn);
}


}
