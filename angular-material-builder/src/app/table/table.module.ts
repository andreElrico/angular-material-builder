import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module/material-module.module';
import { FormsModule } from '@angular/forms';

const _ROUTES = [
  {
    path: '',
    component: TableComponent
  }
];

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(_ROUTES),
    MaterialModule,
    FormsModule
  ],
})
export class TableModule { }
