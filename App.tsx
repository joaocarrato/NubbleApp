import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Button from './src/components/Button/Button';
import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge">Olá</Text>

          <Box mb="s8">
            <Button title="Entrar" />
          </Box>
          <Button title="Entrar" loading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
