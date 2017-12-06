import { TestBed, inject } from '@angular/core/testing';

import { BbddService } from './bbdd.service';

describe('BbddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BbddService]
    });
  });

  it('should be created', inject([BbddService], (service: BbddService) => {
    expect(service).toBeTruthy();
  }));
});
