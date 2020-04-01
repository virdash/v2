import { Injectable } from '@angular/core';

import coroData from "./interface/data";
import coro from "../assets/data/coro";

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
    "Country\/Region": string;
    "Lat": number;
    "Long": number;
    "confirm": number;
    "recover": number;
    "death": number;
}

export class FeatureProperty {
    text: string;
    value: number;
    tooltip: string;
}

export class FeatureGeometry {
    type: string;
    coordinates: number[];
}

let markers: FeatureCollection = {
    type: "COVID-19",
    features: coro.map(function (data) {
        return {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [data.Long, data.Lat]
            },
            properties: {
                text: data["Country\/Region"],
                value: data.confirm,
                tooltip: "<b>" + data["Country\/Region"] + "</b>\n" + data.confirm
            }
        }
    })
};


@Injectable({
  providedIn: 'root'
})
export class Service {
    // private _corodata: coroData[] = coro;

    // get corodata(){
    //     return [...this._corodata]
    // }
    // getData() {
    //     return this.http.get<{data: any}>(
    //       `https://st.plentywaka.com/api/v2/wakaboard/collate`
    //     );
    //   }

    private _totalConfirm = coro.reduce((prev,cur)=>{
            return prev + cur.confirm
        }, 0)

    getTotalConfirm(){
        console.log(`Total Confirmed = ${this._totalConfirm}`);
        
        return this._totalConfirm
    }

    getMarkers(): FeatureCollection {
        return markers;
    }
}
