import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const Box = createBox<Theme>();

export type TouchableOpacityBoxProps = TouchableOpacityProps &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme>;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, layout, border, spacing, spacingShorthand],
  TouchableOpacity,
);
