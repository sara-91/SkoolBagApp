import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchfilter",
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if (item && (item.name || item.address)) {
        return (
          item.name.toLowerCase().includes(searchText) ||
          item.address.street.toLowerCase().includes(searchText) ||
          item.address.suburb.toLowerCase().includes(searchText) ||
          item.address.state.toLowerCase().includes(searchText) ||
          item.address.postcode.toLowerCase().includes(searchText)
        );
      }
      return false;
    });
  }
}
