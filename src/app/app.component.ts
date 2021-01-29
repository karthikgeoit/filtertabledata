import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Tabledata } from './tabledata';
import { TableserviceService } from './tableservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Filtering Child Data from Parant DropDown';
  
  selectedYear: string;
  selectedMonth: string;
  years =['2012', '2013','2014','2015']
  months=['January','February','March','April','May','December']
  constructor(private service: TableserviceService,
   ) { }
  ngOnInit(): void {
  }
}
