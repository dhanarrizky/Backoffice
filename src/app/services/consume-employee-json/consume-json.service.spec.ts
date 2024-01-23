import { TestBed } from '@angular/core/testing';

import { ConsumeJsonService } from './consume-json.service';

describe('ConsumeJsonService', () => {
  let service: ConsumeJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumeJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
