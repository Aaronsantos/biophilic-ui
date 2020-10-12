import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { GlobalStyles } from './globalStyle';
import defaultTheme from './theme';
import './typographyImports.css';
// import { Container } from './styles';

export type TTheme = typeof defaultTheme;

declare module 'styled-components' {
  type Theme = TTheme;
  export type DefaultTheme = Theme;
}

type TThemeProvider = {
  theme?: TTheme;
};

const ThemeProvider: React.FC<TThemeProvider> = ({
  children,
  theme = defaultTheme,
}) => (
  <StyledProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledProvider>
);

export default ThemeProvider;