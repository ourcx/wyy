/// <reference types="react-scripts" />
import 'styled-components';

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
      BarBg: string;
      // 新增颜色
      error: string;
      warning: string;
      info: string;
      success: string;
      border: string;
      disabled: string;
    };
    size: {
      barHeight: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    spacing: {
      unit: number;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      round: string;
    };
    shadow: {
      light: string;
      medium: string;
      dark: string;
    };
    zIndex: {
      modal: number;
      popover: number;
      tooltip: number;
    };
    mixin: {
      wrapv1: string;
      wrapv2: string;
    };
  }
}