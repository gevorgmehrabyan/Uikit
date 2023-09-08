import 'styled-components/macro';

import {
  MediaQueryByDevice,
  CommonLayoutStyleByDevice,
  Typography,
  Flexes,
  Transition,
  Shadow,
  BorderRadius,
  GraphicalEffects,
  Gradient,
  Border,
  Color,
} from './types';

declare module 'styled-components/macro' {
  export interface DefaultTheme {
    typography: Typography;
    flex: Flexes;
    transition: Transition;
    shadow: Shadow;
    borderRadius: BorderRadius;
    graphicalEffects: GraphicalEffects;
    gradient: Gradient;
    border: Border;
    getPxBySpace: (multiplier: number) => string;
    getBorderWithRadius: (borderRadius: string, border: string) => string;
    color: { [key in Color]: string };
  }
}
