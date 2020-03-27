import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'views'
})
export class ViewsPipe implements PipeTransform {
  transform(value: any) {
    let denominator = 1;
    let symbol = '';

    if (value > 1000000) {
      denominator = 1000000;
      symbol = 'M';
    } else if (value > 1000) {
      denominator = 1000;
      symbol = 'K';
    }

    return (value / denominator).toFixed(1) + symbol;
  }
}
