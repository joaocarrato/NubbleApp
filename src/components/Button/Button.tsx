import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Text } from '../Text/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  const { colors } = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: colors.greenPrimary,
      }}>
      <Text preset="paragraphMedium" bold style={{ color: '#fff' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
