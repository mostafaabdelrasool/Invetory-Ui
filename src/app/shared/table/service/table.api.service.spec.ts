/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Table.apiService } from './table.api.service';

describe('Service: Table.api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Table.apiService]
    });
  });

  it('should ...', inject([Table.apiService], (service: Table.apiService) => {
    expect(service).toBeTruthy();
  }));
});
