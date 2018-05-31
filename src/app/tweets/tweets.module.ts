import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetListComponent } from '../tweet-list/tweet-list.component';
import { TweetFeedsComponent } from '../tweet-feeds/tweet-feeds.component';

import { TweetsRoutingModule } from './tweets-routing.module';
import { RelativeDatePipe } from '../relative-date.pipe';
import { TweetFilterPipe } from '../tweet-filter.pipe';

import { FormsModule } from "@angular/forms";


import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatProgressBarModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TweetsRoutingModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule
  ],
  declarations: [TweetListComponent, TweetFeedsComponent, RelativeDatePipe, TweetFilterPipe]
})
export class TweetsModule {}
