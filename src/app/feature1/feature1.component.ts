import { Component, OnInit } from '@angular/core';
import { TextFilterService } from '../shared/text-filter.service';
import { Router } from '@angular/router';
import { LoggerService } from '../core/logger.service';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css']
})
export class Feature1Component implements OnInit {

  constructor(private textFilterService: TextFilterService, private router: Router, private loggerService: LoggerService) { }

  ngOnInit() {
    console.log('feature1', this.textFilterService.bar, this.loggerService.bar);
  }

  addSomething() {
    this.textFilterService.foo('feature1111111');
    this.loggerService.foo('feature1111111');
    console.log('feature1 added', this.textFilterService.bar, this.loggerService.bar);
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
