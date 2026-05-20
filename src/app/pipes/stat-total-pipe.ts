import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statTotal',
})
export class StatTotalPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
