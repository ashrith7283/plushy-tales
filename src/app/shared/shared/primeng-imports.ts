
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputIconModule } from "primeng/inputicon";
import { CardModule } from 'primeng/card';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    //BrowserModule,
    //BrowserAnimationsModule,
    SidebarModule,
    CardModule,
    InputIconModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    SidebarModule,
    ButtonModule,
    CardModule,
    InputIconModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [  ]
})
export class PrimengImportsModule {}
