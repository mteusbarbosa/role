import { TestBed } from '@angular/core/testing';

import { RoleResolver } from './role.resolver';

describe('RoleResolver', () => {
  let resolver: RoleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RoleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
