import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tweetFilter'
})
export class TweetFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    console.log(searchText)

    return items.filter(item => {
      return item['text'].toLowerCase().includes(searchText);
    });
  }
}
