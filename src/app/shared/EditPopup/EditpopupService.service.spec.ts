/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditpopupServiceService } from './editPopup.service';

describe('Service: EditpopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditpopupServiceService]
    });
  });

  it('should ...', inject([EditpopupServiceService], (service: EditpopupServiceService) => {
    expect(service).toBeTruthy();
  }));
});
