import { TestBed, async, inject } from '@angular/core/testing';

import { EinerGuard } from './einer.guard';

describe('EinerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EinerGuard]
    });
  });

  it('should ...', inject([EinerGuard], (guard: EinerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
