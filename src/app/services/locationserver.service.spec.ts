import { TestBed, inject } from '@angular/core/testing';

import { LocationserverService } from './locationserver.service';

describe('LocationserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationserverService]
    });
  });

  it('should be created', inject([LocationserverService], (service: LocationserverService) => {
    expect(service).toBeTruthy();
  }));
});
