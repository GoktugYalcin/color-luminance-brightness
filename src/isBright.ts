import { calculateLuminance } from './calculateLuminance';
import { hexToRgb } from './hexToRgb';
import { BLACK_LUMINANCE, WHITE_LUMINANCE } from './constants';

export const isBright = (colorHex: string): boolean => {
  const colorRgb = hexToRgb(colorHex);
  const bgLuminance = calculateLuminance(colorRgb[0], colorRgb[1], colorRgb[2]);

  const contrastWithWhite = (WHITE_LUMINANCE + 0.05) / (bgLuminance + 0.05);
  const contrastWithBlack = (bgLuminance + 0.05) / (BLACK_LUMINANCE + 0.05);

  return contrastWithWhite < contrastWithBlack;
};

export const isDark = (colorHex: string): boolean => {
  return !isBright(colorHex);
};
