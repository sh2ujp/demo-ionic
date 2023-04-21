import { TestBed } from '@angular/core/testing';

import { KaamelottProviderService } from './kaamelott-provider.service';

describe('KaamelottProviderService', () => {
  let service: KaamelottProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaamelottProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
