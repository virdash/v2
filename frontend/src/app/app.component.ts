import { Component, enableProdMode } from '@angular/core';

import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import { FeatureCollection, Service } from './app.service';
import coroData from "./interface/data";


if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Virdash';
  worldMap: any = mapsData.world;
  markers: FeatureCollection;
  // markers: coroData[];
  totalConfirm: number;

  constructor(service: Service) {
      this.markers = service.getMarkers();
      this.totalConfirm = service.getTotalConfirm();
      // this.markers = service.corodata;
  }

  customizeText(arg) {
      return ["< 8000K", "8000K to 10000K", "> 10000K"][arg.index];
  }

  customizeItems(items) {
      return items.reverse();
  }

  customizeTooltip(arg) {
      if(arg.layer.type === "marker") {
          return {
              text: arg.attribute("tooltip")
          };
      }
  }
}

