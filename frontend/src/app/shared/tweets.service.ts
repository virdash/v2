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
      `http://34.70.11.119/api/tweets`
    );
  }
}
