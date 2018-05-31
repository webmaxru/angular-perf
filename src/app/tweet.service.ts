import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


import { Tweet } from './tweet'

@Injectable({ 
  providedIn: 'root' 
})
export class TweetService {

  API_URL: string = "http://localhost:3000"

  constructor(private http: HttpClient) {
  }

  getTimelineTweets(): Observable<any> {
    const url = `${this.API_URL}/timeline`;
    console.log('[Tweet Service] Requesting timeline')
    return this.http
      .get(url)

  }

  getFavoriteTweets(): Observable<any> {
    const url = `${this.API_URL}/favorites`;
    console.log('[Tweet Service] Requesting favorites')
    return this.http
      .get(url)
  }

  postTweet(message: string): Observable<any> {
    const url = `${this.API_URL}/post-tweet`;
    console.log('[Tweet Service] Posting tweet')

    return this.http
      .post(url, { message })
  }



}
