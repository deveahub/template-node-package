import lib from './lib';

describe('Package', () => {
  it('should returns Hello', () => {
    expect(lib()).toBe('Hello!');
  });
});
