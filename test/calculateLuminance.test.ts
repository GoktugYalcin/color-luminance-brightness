import { calculateLuminance } from '../src';

describe('luminance calculation', () => {
  it('white luminance calculation', () => {
    expect(calculateLuminance(255, 255, 255)).toEqual(1);
  });
  it('black luminance calculation', () => {
    expect(calculateLuminance(0, 0, 0)).toEqual(0);
  });
});
