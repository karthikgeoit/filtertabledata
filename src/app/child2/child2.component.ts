import { Component, Input, OnInit } from '@angular/core';
import { Tabledata } from '../tabledata';
import { TableserviceService } from '../tableservice.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  @Input('selectedYear') selectedyear: string;
  @Input('selectedMonth') selectedmonth: string;
  child2Data: Tabledata[];
  errorMessage: any;
  OriginalData: Tabledata[];
  constructor(private service: TableserviceService,
  ) { }

  ngOnInit(): void {
    this.service.gettable2Data().subscribe({
      next: (table2data: Tabledata[]) => {

        this.OriginalData = table2data;
        this.child2Data = this.OriginalData
        console.log(this.child2Data)

      },
      error: err => this.errorMessage = err
    });

  }
  ngOnChanges() {
    if (this.selectedyear != undefined || this.selectedmonth != undefined) {

      if ((this.selectedyear != "") && (this.selectedmonth != "")) {
        this.child2Data = this.OriginalData.filter(x => x.year === this.selectedyear && x.month === this.selectedmonth);
      }
      else if ((this.selectedyear != "") && (this.selectedmonth == "" || this.selectedmonth == undefined)) {
        this.child2Data = this.OriginalData.filter(y => y.year === this.selectedyear);
      }
      else if (this.selectedyear == "" && this.selectedmonth != "") {
        this.child2Data = this.OriginalData.filter(x => x.month === this.selectedmonth);

      }
      else {
        this.child2Data = this.OriginalData;

      }
    }
    else {
      this.child2Data = this.OriginalData;

    }
  }
}
