import { Component, enableProdMode } from '@angular/core';

import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import { FeatureCollection, Service } from './app.service';


if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'frontend';
  worldMap: any = mapsData.world;
  markers: FeatureCollection;

  constructor(service: Service) {
      this.markers = service.getMarkers();
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

