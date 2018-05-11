import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextFilterService } from '../shared/text-filter.service';

//this feature3 module is to illustrate that if we did not import sharedmodule what would be error outcome in using the service from sharedmodule

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.css']
})
export class Feature3Component implements OnInit {

  constructor(
    // private textFilterService: TextFilterService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.textFilterService.foo('textFilterFeature3');
    // console.log('textFilterFeature3.bar', this.textFilterService.bar);
    //
    // this.loggerService.foo('loggerFeature3');
    // console.log('loggerFeature3.bar', this.textFilterService.bar);
  }

  gotoFeature1() {
    this.router.navigate(['/feature1']);
  }

  gotoFeature2() {
    this.router.navigate(['/feature2']);
  }

  gotoFeature3() {
    this.router.navigate(['/feature3']);
  }

}
