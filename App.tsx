import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme';
import { Icon } from './src/components/Icon/Icon';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge">Olá</Text>

          <Icon name="chat" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
