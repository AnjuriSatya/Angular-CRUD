import { Directive ,HostListener} from '@angular/core';

@Directive({
  selector: '[appAlphabetsonly]'
})
export class AlphabetsonlyDirective {

  constructor() { }
  @HostListener('input', ['$event']) onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Remove non-numeric characters from the input value
    const numericValue = value.replace(/[[a-zA-Z][a-zA-Z ]+ ]/g, '');

    // Set the input value to the cleaned numeric value
    input.value = numericValue;
}
}