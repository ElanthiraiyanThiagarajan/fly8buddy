import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightService } from './flight.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { FlightsViewComponent } from './flights-view/flights-view.component';
import { LoaderComponent } from './loader/loader.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    AddPassengerComponent,
    BookingSummaryComponent,
    FlightsViewComponent,
    LoaderComponent,
    NoPageFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
