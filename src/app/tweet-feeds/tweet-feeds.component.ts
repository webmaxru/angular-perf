import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


import { Tweet } from '../tweet'
import { TweetService } from './../tweet.service';

@Component({
  selector: 'app-tweet-feeds',
  templateUrl: './tweet-feeds.component.html',
  styleUrls: ['./tweet-feeds.component.css']
})
export class TweetFeedsComponent implements OnInit {

  isInteractionStarted: boolean = false

  tweets$: Observable<Tweet[]>
  tweets

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
  }

  loadTimeLine() {

    this.isInteractionStarted = true

/*     this.tweetService
      .getTimelineTweets()
      .subscribe( tweets => {
        this.tweets = tweets
      }) */

      this.tweets$ = this.tweetService
      .getTimelineTweets()

  }

  loadFavorites() {

    this.isInteractionStarted = true

    this.tweets$ = this.tweetService
      .getFavoriteTweets()

  }

}
