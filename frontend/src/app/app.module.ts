import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxVectorMapModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotRasaModule } from "angular-chat-widget-rasa";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxVectorMapModule,
    ChatbotRasaModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
