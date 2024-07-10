import { isBright, isDark } from '../src';

describe('luminance brightness decide', () => {
  it('is white bright', () => {
    expect(isBright('#ffffff')).toEqual(true);
  });
  it('is black bright', () => {
    expect(isBright('#000000')).toEqual(false);
  });
  it('is white dark', () => {
    expect(isDark('#ffffff')).toEqual(false);
  });
  it('is black dark', () => {
    expect(isDark('#000000')).toEqual(true);
  });
});
