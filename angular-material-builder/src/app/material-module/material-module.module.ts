import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { ClipboardModule } from '@angular/cdk/clipboard';


const _IMPORTS = [
  MatTableModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  ClipboardModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ..._IMPORTS
  ],
  exports: [
    ..._IMPORTS
  ]
})
export class MaterialModule { }
