import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {
  transform(value: any): string {
    if (value) {
      return moment(value).format('DD/MM/YYYY');
    }
    return '-';
  }


}
