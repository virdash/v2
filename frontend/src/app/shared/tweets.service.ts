import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import tweetInterface from "../interface/tweets";

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(
    private http: HttpClient
  ) {  }

  getData() {
    return this.http.get<tweetInterface[]>(
      `https://api/virdash.com/v1/tweets`
    );
  }
}
