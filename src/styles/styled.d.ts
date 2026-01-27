import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
      secondary: string;
      background: string;
      textDark: string;
      textLight: string;
      gray: string;
      lightGray: string;
    };
    sizes: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
