import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApisevicesService } from './../service/apisevices.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
      ],
  providers: [ApisevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
