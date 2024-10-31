import { TestBed } from '@angular/core/testing';

import { GetProductsByCategoryService } from './get-products-by-category.service';

describe('GetProductsByCategoryService', () => {
  let service: GetProductsByCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductsByCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
