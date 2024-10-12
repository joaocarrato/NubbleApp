import React from 'react';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

const Button = ({ title, loading }: ButtonProps) => {
  return (
    <Box
      px="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      backgroundColor="carrotSecondary">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{ color: '#fff' }}>
          {title}
        </Text>
      )}
    </Box>
  );
};

export default Button;
