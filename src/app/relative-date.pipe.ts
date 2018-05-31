import { Pipe, PipeTransform } from '@angular/core';

import { distanceInWordsToNow } from 'date-fns';
//import { memoize } from 'lodash-decorators';

//const memoize = require('lodash.memoize');
import { memoize } from 'lodash'

const getRelativeDate = memoize((date: string): string => {
  return distanceInWordsToNow(date);
});

@Pipe({ name: 'relativeDate', pure: true })
export class RelativeDatePipe implements PipeTransform {
  transform(date) {
    console.log('Calling relativeDate pipe for ' + date);
    return getRelativeDate(date);
  }

  //@memoize()
  getRelativeDate(date) {
    distanceInWordsToNow(date);
  }
}
