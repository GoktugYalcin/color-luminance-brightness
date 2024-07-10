import { hexToRgb } from '../src';

describe('hex to rgb transformation', () => {
  it('white hex to rgb', () => {
    expect(hexToRgb('#ffffff')).toEqual([255, 255, 255]);
  });
  it('black hex to rgb', () => {
    expect(hexToRgb('#000000')).toEqual([0, 0, 0]);
  });
  it('white hex to rgb(three digits)', () => {
    expect(hexToRgb('#fff')).toEqual([255, 255, 255]);
  });
  it('black hex to rgb(three digits)', () => {
    expect(hexToRgb('#000')).toEqual([0, 0, 0]);
  });
  it('not proper hex', () => {
    expect(() => hexToRgb('abcabcabcabc')).toThrow(
      new Error('Hex code is not proper')
    );
  });
});
