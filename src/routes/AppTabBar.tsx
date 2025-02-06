import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  Box,
  BoxProps,
  Icon,
  Text,
  TextProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {useAppSafeArea} from '@hooks';
import {$shadowProps} from '@theme';

import {AppTabBottomTabParamList} from './AppTabNavigator';
import {mapScreenToProps} from './mapScreenToProps';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();
  return (
    <Box {...$boxWrapper} style={[{paddingBottom: bottom}, $shadowProps]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            {...$itemWrapper}
            key={route.key}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
              color={isFocused ? 'primary' : 'grayBlack'}
            />
            <Text {...$label} color={isFocused ? 'primary' : 'grayBlack'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
  mt: 's4',
  preset: 'paragraphCaption',
  semiBold: true,
};

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
};

const $boxWrapper: BoxProps = {
  pt: 's12',
  flexDirection: 'row',
  bg: 'background',
};
