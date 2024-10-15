import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme';
import { TextInput } from './src/components/TextInput/TextInput';
import { Box } from './src/components/Box/Box';
import Button from './src/components/Button/Button';
import { Icon } from './src/components/Icon/Icon';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge" mb="s8">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            rightComponent={<Icon name="eyeOn" color="gray2" />}
            errorMessage="Error mensage"
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{ mb: 's20' }}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{ mb: 's10' }}
          />

          <Text preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>

          <Button title="Entrar" preset="primary" mt="s48" />
          <Button title="Criar uma conta" preset="outline" mt="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
