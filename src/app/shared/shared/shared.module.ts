
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengImportsModule } from './primeng-imports';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengImportsModule

  ],
  exports:[
    PrimengImportsModule
  ]

})
export class SharedModule { }
