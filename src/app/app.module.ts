import { TableserviceService } from './tableservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {Dbdata} from './dbdata';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(Dbdata, { delay: 1000 }),
    HttpClientModule,
    FormsModule
  ],
  providers: [TableserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
