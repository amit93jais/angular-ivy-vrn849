import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queryFilter',
})
export class QueryFilter implements PipeTransform {
  transform(list: any[], value: string) {
    return value
      ? list.filter(
          (item) =>
            item.first_name.toUpperCase().includes(value.toUpperCase()) ||
            item.last_name.toUpperCase().includes(value.toUpperCase()) ||
            item.email.toUpperCase().includes(value.toUpperCase())
        )
      : list;
  }
}
