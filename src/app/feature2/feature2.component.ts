import { Component, OnInit } from '@angular/core';
import { TextFilterService } from '../shared/text-filter.service';
import { Router } from '@angular/router';
import { LoggerService } from '../core/logger.service';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css']
})
export class Feature2Component implements OnInit {

  constructor(private textFilterService: TextFilterService, private router: Router, private loggerService: LoggerService) { }

  ngOnInit() {
    console.log('feature2', this.textFilterService.bar, this.loggerService.bar);
  }

  addSomething() {
    this.textFilterService.foo('feature22222222');
    this.loggerService.foo('feature22222222');
    console.log('feature2 added', this.textFilterService.bar, this.loggerService.bar);
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
