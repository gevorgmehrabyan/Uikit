type Typography = {
  [key in
    | '10-14-400'
    | '12-16-400'
    | '12-16-500'
    | '12-16-700'
    | '12-20-500'
    | '12-20-700'
    | '14-18-400'
    | '14-18-500'
    | '14-18-700'
    | '14-20-400'
    | '14-20-700'
    | '16-20-700'
    | '20-24-400'
    | '20-24-700'
    | '28-30-700'
    | '34-40-700']: {
    fontSize: number;
    lineHeight: string;
    fontWeight: number;
  };
};

type Flexes = {
  [key in 'center' | 'between' | 'evenly']: {
    display: 'flex';
    alignItems: string;
    justifyContent: string;
  };
};

type Transition = {
  // Todo update to next order => short, medium, long
  [key in 'quick' | 'short' | 'medium']: {
    transition: string;
  };
};

type Shadow = {
  [key in 'default' | 'inner']: string;
};

type Border = {
  [key in 'default' | 'hover' | 'active' | 'error']: string;
};

type BorderRadius = {
  [key in 'small' | 'medium' | 'large' | 'full']: string;
};

type Gradient = {
  [key in 'pinkFloyd' | 'deepPurple' | 'pinkBlue' | 'greenDay']: string;
};

type GraphicalEffects = {
  backdropFilter: string;
};

enum Color {
  Primary_main = 'Primary_main',
  Primary_dark = 'Primary_dark',
  Primary_light = 'Primary_light',

  Secondary_main = 'Secondary_main',
  Secondary_dark = 'Secondary_dark',
  Secondary_light = 'Secondary_light',

  Tertiary_main = 'Tertiary_main',
  Tertiary_dark = 'Tertiary_dark',
  Tertiary_light = 'Tertiary_light',

  Info_main = 'Info_main',
  Info_focused = 'Info_focused',
  Info_light = 'Info_light',

  BlackToWhite_extraBlack = 'BlackToWhite_extraBlack',
  BlackToWhite_black = 'BlackToWhite_black',
  BlackToWhite_darkLight = 'BlackToWhite_darkLight',
  BlackToWhite_darkGrey = 'BlackToWhite_darkGrey',
  BlackToWhite_grey = 'BlackToWhite_grey',
  BlackToWhite_lightGrey = 'BlackToWhite_lightGrey',
  BlackToWhite_white = 'BlackToWhite_white',

  Error_main = 'Error_main',
  Error_light = 'Error_light',

  Warning_main = 'Warning_main',
  Warning_dark = 'Warning_dark',
  Warning_light = 'Warning_light',

  Success_main = 'Success_main',
  Success_dark = 'Success_dark',
  Success_light = 'Success_light',

  Background_main = 'Background_main',
  Background_dark = 'Background_dark',
  Background_whiteWithOpacity = 'Background_whiteWithOpacity',

  ChartsAvatarBullets_purple = 'ChartsAvatarBullets_purple',
  ChartsAvatarBullets_azure = 'ChartsAvatarBullets_azure',
  ChartsAvatarBullets_yellow = 'ChartsAvatarBullets_yellow',
  ChartsAvatarBullets_fuxia = 'ChartsAvatarBullets_fuxia',
  ChartsAvatarBullets_green = 'ChartsAvatarBullets_green',
  ChartsAvatarBullets_blue = 'ChartsAvatarBullets_blue',
  ChartsAvatarBullets_dark = 'ChartsAvatarBullets_dark',
  ChartsAvatarBullets_sky = 'ChartsAvatarBullets_sky',
  ChartsAvatarBullets_black900 = 'ChartsAvatarBullets_black900',
  ChartsAvatarBullets_orange = 'ChartsAvatarBullets_orange',
  ChartsAvatarBullets_grey = 'ChartsAvatarBullets_grey',
}

export { Color };
export type { Transition, Flexes, Typography, Shadow, BorderRadius, Gradient, Border, GraphicalEffects };
