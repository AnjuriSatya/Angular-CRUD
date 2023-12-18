import { Directive,HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumericonly]'
})
export class NumericonlyDirective {

  constructor(private ngControl: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    // Replace non-numeric characters with an empty string
    const newValue = value.replace(/[^0-9]/g, '');
    this.ngControl?.control?.setValue(newValue);
  }
  
}
