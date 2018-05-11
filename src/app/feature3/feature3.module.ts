import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature3Component } from './feature3.component';
import { Feature3RoutingModule } from './feature3-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Feature3RoutingModule
  ],
  declarations: [Feature3Component]
})
export class Feature3Module { }
