import { TestBed, async, inject } from '@angular/core/testing';

import { GoogleAuthGuardGuard } from './google-auth-guard.guard';

describe('GoogleAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAuthGuardGuard]
    });
  });

  it('should ...', inject([GoogleAuthGuardGuard], (guard: GoogleAuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
