import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit: number) {
    if (value.length <= limit) {
      return value;
    }

    return value.substr(0, value.lastIndexOf(' ', limit));
  }
}
