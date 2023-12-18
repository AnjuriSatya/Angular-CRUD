import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appPositivenumbers]'
})
export class PositivenumbersDirective {
  private regex = new RegExp(/^\d*[.,]?\d*$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (!event.key.match(this.regex) && !this.specialKeys.includes(event.key)) {
      event.preventDefault();
      return;
    }
  }

}
