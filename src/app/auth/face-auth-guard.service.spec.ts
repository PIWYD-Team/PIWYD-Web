import { TestBed, inject } from '@angular/core/testing';

import { FaceAuthGuardService } from './face-auth-guard.service';

describe('FaceAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceAuthGuardService]
    });
  });

  it('should be created', inject([FaceAuthGuardService], (service: FaceAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
