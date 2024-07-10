export const hexToRgb = (hex: string): number[] => {
  if (hex.length > 7 || !hex.startsWith('#')) {
    throw new Error('Hex code is not proper');
  }

  hex = hex.replace('#', '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('');
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
};
