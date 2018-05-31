import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Tweet } from '../tweet';
import { TweetService } from './../tweet.service';

import { distanceInWordsToNow } from 'date-fns';
import { memoize } from 'lodash-decorators';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetListComponent implements OnInit {
  @Input() tweets: Tweet[];
  searchText: string = '';

  constructor() {}

  ngOnInit() {}

  //@memoize()
  relativeDate(date) {
    console.log('Calling relativeDate method');
    return distanceInWordsToNow(date);
  }

  trackById(index, tweet) {
      return tweet.id;
  }
}
