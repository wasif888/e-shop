import { JwtGuard } from './jwt-auth.guard';

describe('JwtGuard', () => {
  it('should be defined', () => {
    expect(new JwtGuard()).toBeDefined();
  });
});
