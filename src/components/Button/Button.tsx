import React from 'react';
import { Text } from '../Text/Text';
import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { ActivityIndicator } from 'react-native';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

const Button = ({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) => {
  return (
    <TouchableOpacityBox
      px="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      backgroundColor="buttonPrimary"
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{ color: '#fff' }}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};

export default Button;
