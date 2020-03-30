import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'since'
})
export class SincePipe implements PipeTransform {
  transform(value: string) {
    return moment(value).fromNow();
  }
}
