/// <reference types="react-scripts" />
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
    };
    size: Record<string, any>;
    mixin: {
      wrapv1: string;
    };
  }
}
