import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {render, RenderOptions, screen} from '@testing-library/react-native';

import {theme} from '@theme';

function AllTheProviders({children}: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
}

function customRender<T = unknown>(
  ui: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {wrapper: AllTheProviders, ...options});
}

/**
 *
 * @returns the screen debug showing all props
 * @description `[original screen.debug is bugging]`
 */
export const debugTree = () => screen.debug({mapProps: props => props});

export * from '@testing-library/react-native';
export {customRender as render};
export {debugTree as debug};
