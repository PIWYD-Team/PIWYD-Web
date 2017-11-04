import { TestBed, inject } from '@angular/core/testing';

import { FileManagerGuardService } from './file-manager-guard.service';

describe('FileManagerGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileManagerGuardService]
    });
  });

  it('should be created', inject([FileManagerGuardService], (service: FileManagerGuardService) => {
    expect(service).toBeTruthy();
  }));
});
