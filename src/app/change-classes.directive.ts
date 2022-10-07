import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeClasses]'
})
export class ChangeClassesDirective {
  singleLetter = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter', ['$event']) toggleOpen() {

    this.singleLetter = true;

    if (this.singleLetter) {
      
      this.renderer.removeClass(this.elRef.nativeElement, 'text-animate');
      this.renderer.addClass(this.elRef.nativeElement, 'text-animation-hover');
      this.renderer.addClass(this.elRef.nativeElement, 'text-animation-transition');
      setTimeout(()=> this.renderer.removeClass(this.elRef.nativeElement, 'text-animation-transition'), 1000)
    } else {

    }
  }
}
