import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render, RenderOptions, screen} from '@testing-library/react-native';

import {theme} from '@theme';

const queryClient = new QueryClient({
  logger: {
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
    mutations: {
      retry: false,
      cacheTime: Infinity,
    },
  },
});

export function AllTheProviders({children}: React.PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
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
