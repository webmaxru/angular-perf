import { Pipe, PipeTransform } from '@angular/core';

import { distanceInWordsToNow } from 'date-fns';
import { memoize } from 'lodash-decorators';

/* import { memoize } from 'lodash'

const getRelativeDate = memoize(
  (date: string): string => {
    return distanceInWordsToNow(date);
  }
); */

@Pipe({ name: 'relativeDate', pure: true })
export class RelativeDatePipe implements PipeTransform {
  transform(date) {
    //console.log('Calling relativeDate pipe');
    return this.getRelativeDate(date);
  }

  @memoize()
  getRelativeDate(date) {
    //console.log('Calling getRelativeDate method inside the pipe');
    return distanceInWordsToNow(date);
  }
}
