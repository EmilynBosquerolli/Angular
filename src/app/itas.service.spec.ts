import { TestBed } from '@angular/core/testing';

import { ItasService } from './itas.service';

describe('ItasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItasService = TestBed.get(ItasService);
    expect(service).toBeTruthy();
  });
});
