import { Component, enableProdMode } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import { FeatureCollection, Service } from './app.service';

import tweetInterface from "./interface/tweets";
import { TweetsService } from "./shared/tweets.service";

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // For the Map
  title = 'Africa Coronavirus Information and Awareness Hub | Virdash';
  worldMap: any = mapsData.world;
  markers: FeatureCollection;

  totalValue: any;
  totalConfirm: number;
  totalRecover: number;
  totalDeath: number;
  bubbleColor: string="#fc9107";
  value: string = 'confirm';

  totalColor: boolean[]=[true,false,false];

  renderConfirm(): any{
    this.totalValue=this.totalConfirm.toLocaleString();
    this.bubbleColor="#fc9107";
    this.value='confirm';
    this.totalColor=[true,false,false];
    this.changeBubble()
  }

  renderRecover(){
    this.totalValue = this.totalRecover.toLocaleString();
    this.bubbleColor="#05BD00";
    this.value='recover';
    this.totalColor=[false,true,false];
    this.changeBubble()
  }

  renderDeath(){
    this.totalValue = this.totalDeath.toLocaleString();
    this.bubbleColor="#F90000";
    this.value='death';
    this.totalColor=[false,false,true];
    this.changeBubble()
  }

  // For the Tweets
  isLoadingData = true;
  tweetData: tweetInterface[];

  constructor(
    private service: Service,
    private tweetService: TweetsService,
    private titleService: Title,
    private metaService: Meta
    ) {
      this.markers = service.getMarkers();
      this.totalConfirm = service.getTotal('confirm');
      this.totalRecover = service.getTotal('recover');
      this.totalDeath = service.getTotal('death');

      // Initializing the total value
      this.totalValue = this.totalConfirm.toLocaleString()


      this.tweetService.getData().subscribe(
        resp => {
            this.isLoadingData = false;
            this.tweetData = resp;
            console.log(resp);
        },error => {
          console.log('error: ', error)
       }
      )

  }

  // Display bubble
  changeBubble(){
    this.service.setValue(this.value)
    this.markers = this.service.getMarkers()
  }

  customizeTooltip(arg) {
      if(arg.layer.type === "marker") {
          return {
              text: arg.attribute("tooltip")
          };
      }
  }
  ngOnInit() {
    this.titleService.setTitle(this.title);
    // this.metaService.addTags([
      // {name: 'keywords', content: 'COVID-19, Africa, Coronavirus, Symptoms'},
      // {name: 'description', content: 'Virdash is a non-profit resource hub to increase awareness and accurate information on COVID-19 in Africa. It is an open-source project to improve areas of communication and early detection of the coronavirus.'},
      // {name: 'robots', content: 'index, follow'},
    // ]);
    // this.metaService.addTags([
      // {property:"og:site_name", content:"Website Name"},
      // {property:"og:url", content:"https://virdash.com"},
      // {property:"og:type", content:"Resource Hub"},
      // {property:"og:title", content:"Virdash"},
      // {property:"og:description", content:"Virdash is a non-profit resource hub to increase awareness and accurate information on COVID-19 in Africa. It is an open-source project to improve areas of communication and early detection of the coronavirus."},
      // {property:"og:image", content:"assets/img/virdash.png"},
      // {property:"og:image:secure_url", content:"assets/img/virdash.png"},
    // ]);
  }
}

