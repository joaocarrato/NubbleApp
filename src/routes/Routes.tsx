import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {ActivityIndicator, Box, BoxProps} from '@components';
import {AppStack} from '@routes';

import {AuthStack} from './AuthStack';

export function Router() {
  const {authCredentials, isLoading} = useAuthCredentials();

  if (isLoading) {
    return (
      <Box {...$loadingWrapper}>
        <ActivityIndicator size={'large'} />
      </Box>
    );
  }
  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}

const $loadingWrapper: BoxProps = {
  flex: 1,
  backgroundColor: 'background',
  justifyContent: 'center',
  alignItems: 'center',
};
