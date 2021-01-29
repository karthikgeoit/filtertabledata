import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Tabledata } from '../tabledata';
import { TableserviceService } from '../tableservice.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, OnChanges {
  @Input('selectedYear') selectedyear: string;
  @Input('selectedMonth') selectedmonth: string;
  errorMessage = "";

  child1Data: Tabledata[];
  OriginalData: Tabledata[];
  constructor(private service: TableserviceService,
  ) {

  }

  ngOnInit(): void {

    this.getchild1data()
  }
  getchild1data() {
    this.service.gettable1Data().subscribe({
      next: (table1data: Tabledata[]) => {
        this.OriginalData = table1data;
        this.child1Data = this.OriginalData;
      },
      error: err => this.errorMessage = err
    });
  }
  ngOnChanges() {
    if (this.selectedyear != undefined || this.selectedmonth != undefined) {

      if ((this.selectedyear != "") && (this.selectedmonth != "")) {
        this.child1Data = this.OriginalData.filter(x => x.year === this.selectedyear && x.month === this.selectedmonth);
      }
      else if ((this.selectedyear != "") && (this.selectedmonth == "" || this.selectedmonth == undefined)) {
        this.child1Data = this.OriginalData.filter(y => y.year === this.selectedyear);
      }
      else if (this.selectedyear == "" && this.selectedmonth != "") {
        this.child1Data = this.OriginalData.filter(x => x.month === this.selectedmonth);

      }
      else {
        this.child1Data = this.OriginalData;

      }
    }
    else {
      this.child1Data = this.OriginalData;

    }
  }
}
