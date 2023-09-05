import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputRoutingModule } from './input-output-routing.module';
import { InputOutputComponent } from './input-output/input-output.component';


@NgModule({
  declarations: [
    InputOutputComponent
  ],
  imports: [
    CommonModule,
    InputOutputRoutingModule
  ]
})
export class InputOutputModule { }
