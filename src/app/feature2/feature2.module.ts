import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Feature2Component } from './feature2.component';
import { Feature2RoutingModule } from './feature2-routing.module';

@NgModule({
  imports: [
    SharedModule,
    Feature2RoutingModule
  ],
  declarations: [Feature2Component]
})
export class Feature2Module { }
