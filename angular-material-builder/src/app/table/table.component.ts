import { Component, OnInit, ChangeDetectorRef, DoCheck } from '@angular/core';

const NGMODEL = {
  columns: [{header: '', cell: ''}],
  options: [
    { label: 'hasSort', value: true },
    { label: 'hasPaginator', value: true },
    { label: 'hasFilter', value: true },
  ]
};

const buildTableHtml = (obj: typeof NGMODEL): string => { const a = {}; return ''; };
const buildTableTs   = (obj: typeof NGMODEL): string => { const a = {}; return ''; };

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, DoCheck {

  ngModel = NGMODEL;
  tableHtml: any;
  tableTs: any;

  constructor() { }

  ngOnInit(): void {
  }

  addColumn(): void {
    this.ngModel.columns.push({header: '', cell: ''});
  }

  delColumn(): void {
    if (this.ngModel.columns.length > 1) {
      this.ngModel.columns.pop();
    }
  }

  ngDoCheck(): void {
    this.tableHtml = buildTableHtml(this.ngModel);
    this.tableTs   = buildTableTs(this.ngModel);
  }

}
