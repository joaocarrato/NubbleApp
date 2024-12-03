import { SafeAreaView } from 'react-native';
import React from 'react';
import { Text } from './src/components/Text/Text';

const App = () => {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">App</Text>
    </SafeAreaView>
  );
};

export default App;
