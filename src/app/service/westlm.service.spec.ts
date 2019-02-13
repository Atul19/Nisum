import { TestBed } from '@angular/core/testing';

import { WestlmService } from './westlm.service';

describe('WestlmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WestlmService = TestBed.get(WestlmService);
    expect(service).toBeTruthy();
  });
});
