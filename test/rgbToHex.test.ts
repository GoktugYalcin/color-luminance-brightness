import { rgbToHex } from '../src';

describe('rgb to hex transformation', () => {
  it('white hex to rgb', () => {
    expect(rgbToHex(255, 255, 255)).toEqual('#ffffff');
  });
  it('black hex to rgb', () => {
    expect(rgbToHex(0, 0, 0)).toEqual('#000000');
  });
});
