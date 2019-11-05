import { TestBed } from '@angular/core/testing';

import { ComponentItasService } from './component-itas.service';

describe('ComponentItasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentItasService = TestBed.get(ComponentItasService);
    expect(service).toBeTruthy();
  });
});
