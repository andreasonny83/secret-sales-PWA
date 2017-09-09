import { TestBed, inject } from '@angular/core/testing';

import { SecretSalesService } from './secret-sales.service';

describe('SecretSalesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecretSalesService]
    });
  });

  it('should be created', inject([SecretSalesService], (service: SecretSalesService) => {
    expect(service).toBeTruthy();
  }));
});
