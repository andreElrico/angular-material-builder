import { Component, OnInit, ChangeDetectorRef, DoCheck } from '@angular/core';
import { buildTableHtml, buildTableTs, TableType } from './table.helper';

export const NGMODEL: TableType = {
  columns: [
    {header: 'No.',    cell: 'position'},
    {header: 'Name',   cell: 'name'},
    {header: 'Weight', cell: 'weight'},
    {header: 'Symbol', cell: 'symbol'}
  ],
  options: [
    { label: 'hasSort', value: true },
    { label: 'hasPaginator', value: true },
    { label: 'hasFilter', value: true },
  ]
};

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
