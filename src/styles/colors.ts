const ColorAlpha = (color: string, alpha: number): string =>
  `${color}${Math.floor(alpha * 255).toString(16)}`;

const ColorDark = '#0D0D0D';
const ColorPrimary = '#7267FF';
const ColorSecondary = '#1E1E1E';
const ColorPrimaryDark = '#BF6F42';
const ColorWhite = '#FFFFFF';

export default {
  Dark: ColorDark,
  Dark5: 'rgba(31, 31, 31, 0.05)',
  Dark10: ColorAlpha(ColorDark, 0.1),
  Dark20: ColorAlpha(ColorDark, 0.2),
  Dark30: ColorAlpha(ColorDark, 0.3),
  Dark40: ColorAlpha(ColorDark, 0.4),
  Dark50: ColorAlpha(ColorDark, 0.5),
  Dark60: ColorAlpha(ColorDark, 0.6),
  Dark70: ColorAlpha(ColorDark, 0.7),
  Transparent: '#00000000',

  White: ColorWhite,
  White20: ColorAlpha(ColorWhite, 0.2),
  White30: ColorAlpha(ColorWhite, 0.3),
  White60: ColorAlpha(ColorWhite, 0.6),

  Red: '#F00',
  WhiteGray: '#F5F6FA',
  Disable: '#627FAE;',
  Gray: '#6F869D',
  Green: '#4CAF50',
  DarkBlue: '#0B276A',
  Blue: '#3A86FF',
  InputDisable: '#F5F6F8',
  OverlayColor: '#F5F6FA',

  Silver: '#8c8b87',
  Gold: '#F2C94C',
  Master: '#5e00a0',
  Pink: '#EC407A',

  Primary: ColorPrimary,
  PrimaryDark: ColorPrimaryDark,
  PrimaryDark80: ColorAlpha(ColorPrimaryDark, 0.8),
  PrimaryDisable: '#C0CCDF',
  Secondary: ColorSecondary,
  PassivePrimary: '#B2D7FF',

  Success: '#5abb62',
  Warning: '#f2994a',
  Danger: '#EB5757',
};
