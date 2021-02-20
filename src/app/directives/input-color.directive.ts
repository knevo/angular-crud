import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[inputColor]'
})
export class InputColorDirective {

  constructor(private el: ElementRef) { }
  @Input('inputColor') defColor: string

  @HostBinding('style.backgroundColor')
  bgColor: string;

  @HostListener('keyup') changeBg() {
    this.bgColor = this.defColor || this.getRandomColor()
  }

  private getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
