import { Injectable } from '@angular/core';

@Injectable()
export class TextFilterService {

  bar: string;

  constructor() {
  }

  foo(txt: string) {
    this.bar = txt;
  }

}
