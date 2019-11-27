import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

/**
 * Filter list
 * @param list, columnName, searchedValue
 * @returns list filtered
 */
export class ListFilterPipe implements PipeTransform {
    transform(items: any[], columnName: string, searchedValue: string): any[] {
        if (!items) { return []; }
        if (!searchedValue || searchedValue === undefined) { return items; }

        return items.filter( singleItem =>
            (singleItem[columnName]).toLowerCase().includes(searchedValue.toLowerCase())
        );
    }
}