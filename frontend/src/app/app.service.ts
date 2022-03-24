import { Injectable } from '@angular/core';

import coro from "../assets/data/coro";
import { BehaviorSubject } from 'rxjs';


export class FeatureCollection {
    type: string;
    features: Feature[];
}

export class Feature {
    type: string;
    properties: FeatureProperty;
    geometry: FeatureGeometry;
}

export class CoroData{
    "country": string;
    "lat": number;
    "long": number;
    "confirm": number;
    // "recover": number;
    "death": number;
}

export class FeatureProperty {
    text: string;
    confirm: number;
    // recover: number;
    death: number;
    tooltip: string;
}

export class FeatureGeometry {
    type: string;
    coordinates: number[];
}

// let markers: FeatureCollection = {
//     type: "COVID-19",
//     features: coro.map(function (data) {
//         return {
//             type: "Feature",
//             geometry: {
//                 type: "Point",
//                 coordinates: [data['long'], data['lat']]
//             },
//             properties: {
//                 text: data["country"],
//                 confirm: data['confirm'],
//                 recover: data['recover'],
//                 death: data['death'],
//                 tooltip: "<b>" + data["country"] + "</b>\n" + data['state'] +"\n" + data['confirm']
//             }
//         }
//     })
// };

function someMarker(value: string) {
  return{
    type: "COVID-19",
    features: coro.map(function (data) {

      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [data['long'], data['lat']]
        },
        properties: {
          text: data["country"],
          confirm: data['confirm'],
          // recover: data['recover'],
          death: data['death'],
          // tooltip: "<b>" + data["country"] + "</b>\n" + data['state'] +"\n" + data[value]
          // tooltip: `<b>${data['country']}</b>\n${data['state']}\n<span  style="color: #fc9107">Confirmed: ${data['confirm']}</span>\n<span  style="color: #05BD00">Recovered: ${data['recover']}</span>\n<span  style="color: #F90000">Death: ${data['death']}</span>`
          tooltip: `<b>${data['country']}</b>\n${data['state']}\n<span  style="color: #fc9107">Confirmed: ${data['confirm']}</span>\n<span  style="color: #F90000">Death: ${data['death']}</span>`
        }
      }
    })
  }
}

// let markers: FeatureCollection = someMarker('confirm')



@Injectable({
  providedIn: 'root'
})
export class Service {


  markers: FeatureCollection = someMarker("confirm")

  getTotal(item: string){
    return coro.reduce((prev,cur)=>{
        return prev + cur[item]
      }, 0)
  }

  getMarkers(): FeatureCollection {
    return this.markers;
  }

  setValue(value: string){
    this.markers = someMarker(value)
  }
}
