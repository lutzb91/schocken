import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameComponent } from './game/game.component';
import { WurfelComponent } from './game/wurfel/wurfel.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SpielerComponent } from './game/spieler/spieler.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GameComponent,
    WurfelComponent,
    SpielerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
