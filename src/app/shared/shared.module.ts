import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFilterService } from './text-filter.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  declarations: [],
  providers: [TextFilterService]
})
export class SharedModule { }
