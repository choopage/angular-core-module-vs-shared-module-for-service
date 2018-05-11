import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  bar: string;

  constructor() {
  }

  foo(txt: string) {
    this.bar = txt;
  }

}
