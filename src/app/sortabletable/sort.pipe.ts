import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortCurrency"
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: any[], field: string, idDown:boolean): any[] {
		let koef = idDown?1:-1;
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1*koef;
      } else if (a[field] > b[field]) {
        return 1*koef;
      } else {
        return 0;
      }
    });
    return array;
  }
}