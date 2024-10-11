import { SafeAreaView, View } from 'react-native';
import React from 'react';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import Button from './src/components/Button/Button';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge">Olá</Text>

          <Button title="Entrar" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
