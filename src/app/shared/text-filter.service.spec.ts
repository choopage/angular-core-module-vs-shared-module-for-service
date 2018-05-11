import { TestBed, inject } from '@angular/core/testing';

import { TextFilterService } from './text-filter.service';

describe('TextFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextFilterService]
    });
  });

  it('should be created', inject([TextFilterService], (service: TextFilterService) => {
    expect(service).toBeTruthy();
  }));
});
