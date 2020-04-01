import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxVectorMapModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotComponent } from './components/bot/bot.component';
import { ChatbotRasaModule } from "angular-chat-widget-rasa";

@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxVectorMapModule,
    ChatbotRasaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
