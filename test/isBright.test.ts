import { isBright, isDark } from '../src';

describe('luminance brightness decide', () => {
  it('is white bright', () => {
    expect(isBright('#ffffff')).toEqual(true);
  });
  it('is black bright', () => {
    expect(isBright('#000000')).toEqual(false);
  });
  it('is white bright(with 3 char)', () => {
    expect(isBright('#fff')).toEqual(true);
  });
  it('is black bright(with 3 char)', () => {
    expect(isBright('#000')).toEqual(false);
  });
  it('is white dark', () => {
    expect(isDark('#ffffff')).toEqual(false);
  });
  it('is black dark', () => {
    expect(isDark('#000000')).toEqual(true);
  });
  it('is white dark(with 3 char)', () => {
    expect(isDark('#fff')).toEqual(false);
  });
  it('is black dark(with 3 char)', () => {
    expect(isDark('#000')).toEqual(true);
  });
});
