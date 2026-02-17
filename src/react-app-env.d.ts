/// <reference types="react-scripts" />
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      textPrimary: string;
      textSecondary: string;
      textOnPrimary: string;
      textOnSecondary: string;
    };
    size: Record<string, any>;
    mixin: {
      wrapv1: string;
    };
  }
}
