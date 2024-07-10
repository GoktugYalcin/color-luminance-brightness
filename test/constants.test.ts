import { WHITE_LUMINANCE, BLACK_LUMINANCE } from '../src/constants';

describe('constant luminance is calculating', () => {
  it('white luminance', () => {
    expect(WHITE_LUMINANCE).toEqual(1);
  });
  it('black luminance', () => {
    expect(BLACK_LUMINANCE).toEqual(0);
  });
});
