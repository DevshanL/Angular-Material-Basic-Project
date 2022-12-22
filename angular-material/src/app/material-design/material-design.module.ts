import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class MaterialDesignModule { }
