import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components/macro';

import { Color } from './types';

const SPACE = 4;
/**
 * @description we use "staticTheme" ONLY when we can't use "useTheme" hook
 */
const staticTheme: DefaultTheme = {
  flex: {
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    between: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    evenly: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  },
  transition: {
    quick: {
      transition: 'all 0.15s ease-out',
    },
    short: {
      transition: 'all 0.3s ease',
    },
    medium: {
      transition: 'all 0.6s ease',
    },
  },
  typography: {
    '10-14-400': {
      fontSize: 10,
      lineHeight: '14px',
      fontWeight: 400,
    },
    '12-16-400': {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 400,
    },
    '12-16-500': {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 500,
    },
    '12-16-700': {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 700,
    },
    '12-20-500': {
      fontSize: 12,
      lineHeight: '20px',
      fontWeight: 500,
    },
    '12-20-700': {
      fontSize: 12,
      lineHeight: '20px',
      fontWeight: 700,
    },
    '14-18-400': {
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 400,
    },
    '14-18-500': {
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 500,
    },
    '14-18-700': {
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 700,
    },
    '14-20-400': {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 400,
    },
    '14-20-700': {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 700,
    },
    '16-20-700': {
      fontSize: 16,
      lineHeight: '20px',
      fontWeight: 700,
    },
    '20-24-400': {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 400,
    },
    '20-24-700': {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 700,
    },
    '28-30-700': {
      fontSize: 28,
      lineHeight: '30px',
      fontWeight: 700,
    },
    '34-40-700': {
      fontSize: 34,
      lineHeight: '40px',
      fontWeight: 700,
    },
  },

  shadow: {
    default: '0px 8px 15px rgba(152, 169, 188, 0.267182)',
    inner: 'inset 0px 0px 16px rgba(0, 0, 0, 0.75)',
  },

  border: {
    default: '1px solid #E9E9E9',
    hover: '1px solid #6B6B6B',
    active: '1px solid #3A0CA3',
    error: '1px solid #EA4335',
  },

  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    full: '100%',
  },

  gradient: {
    pinkFloyd: 'linear-gradient(270deg, #340B93 35%, #9800FF 100%)',
    deepPurple: 'linear-gradient(270deg, #250867 35%, #4E1FBA 100%)',
    pinkBlue: 'linear-gradient(270deg, #5F1EF4 35%, #4CC9F0 100%)',
    greenDay: 'linear-gradient(270deg, #245F2C 35%, #71DE81 100%)',
  },

  graphicalEffects: {
    backdropFilter: 'blur(12.5px)',
  },

  color: {
    [Color.Primary_main]: '#3A0CA3',
    [Color.Primary_dark]: '#6B49BA',
    [Color.Primary_light]: '#9B87CE',

    [Color.Secondary_main]: '#5F1EF4',
    [Color.Secondary_dark]: '#8756F7',
    [Color.Secondary_light]: '#CDC5E2',

    [Color.Tertiary_main]: '#9800FF',
    [Color.Tertiary_dark]: '#B240FF',
    [Color.Tertiary_light]: '#F0ECF8',

    [Color.Info_main]: '#4CC9F0',
    [Color.Info_focused]: '#00B5EE',
    [Color.Info_light]: '#E4F7FD',

    [Color.BlackToWhite_extraBlack]: '#000000',
    [Color.BlackToWhite_black]: '#262626',
    [Color.BlackToWhite_darkLight]: '#6B6B6B',
    [Color.BlackToWhite_darkGrey]: '#C7C7C7',
    [Color.BlackToWhite_grey]: '#E9E9E9',
    [Color.BlackToWhite_lightGrey]: '#F5F5F5',
    [Color.BlackToWhite_white]: '#FFFFFF',

    [Color.Error_main]: '#EA4335',
    [Color.Error_light]: '#FEF0EF',

    [Color.Warning_main]: '#E9AE0D',
    [Color.Warning_dark]: '#F4C952',
    [Color.Warning_light]: '#FFF5D9',

    [Color.Success_main]: '#71DE81',
    [Color.Success_dark]: '#245F2C',
    [Color.Success_light]: '#E9FCEB',

    [Color.Background_main]: '#F0F5FF',
    [Color.Background_dark]: '#DEE6E2',
    [Color.Background_whiteWithOpacity]: 'rgba(255,255,255, 0.85)',

    [Color.ChartsAvatarBullets_purple]: '#3A0CA3',
    [Color.ChartsAvatarBullets_azure]: '#4CC9F0',
    [Color.ChartsAvatarBullets_yellow]: '#F4C952',
    [Color.ChartsAvatarBullets_fuxia]: '#9800FF',
    [Color.ChartsAvatarBullets_green]: '#00E33D',
    [Color.ChartsAvatarBullets_blue]: '#0057FF',
    [Color.ChartsAvatarBullets_dark]: '#FF2A00',
    [Color.ChartsAvatarBullets_sky]: '#8BE3FF',
    [Color.ChartsAvatarBullets_black900]: '#262626',
    [Color.ChartsAvatarBullets_orange]: '#FF8A00',
    [Color.ChartsAvatarBullets_grey]: '#CFD4D4',
  },
  /**
   * @example getPxBySpace(10) = 40px; getPxBySpace(0.5) = 2px;
   */
  getPxBySpace: (multiplier: number) => `${SPACE * multiplier}px`,

  getBorderWithRadius: (borderRadius: string, border: string) => `
  border-radius: ${borderRadius};
  border: ${border};
  `,
};

type Props = {
  children: ReactNode;
};

const StyledComponentsThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={staticTheme}>{children}</ThemeProvider>
);
export default StyledComponentsThemeProvider;
export { staticTheme };
