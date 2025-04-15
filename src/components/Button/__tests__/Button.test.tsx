import React from 'react';
import {StyleSheet} from 'react-native';

import {fireEvent, render, screen} from 'test-utils';

import {theme} from '@theme';

import {Button} from '../Button';

describe('<Button />', () => {
  it('should calls onPress function', () => {
    const mockedOnPress = jest.fn();
    render(<Button title="button title" onPress={mockedOnPress} />);

    const titleELement = screen.getByText(/button title/i);

    fireEvent.press(titleELement);
    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('when button is disabled onPress function should not be call', () => {
    const mockedOnPress = jest.fn();
    render(<Button title="button title" disabled onPress={mockedOnPress} />);

    const titleELement = screen.getByText(/button title/i);

    fireEvent.press(titleELement);
    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  test('the title should be gray if the button is disabled', () => {
    render(<Button title="button title" disabled />);

    const titleElement = screen.getByText(/button title/i);
    const titleStyle = StyleSheet.flatten(titleElement.props.style);

    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });

  describe('when button is loading', () => {
    it('should shows loading indicator', () => {
      render(<Button title="button title" loading />);

      const buttonLoading = screen.queryByTestId(/activity-indicator/i);
      expect(buttonLoading).toBeTruthy();
    });

    it('hide title', () => {
      render(<Button title="button title" loading />);

      const titleElement = screen.queryByText(/button title/i);
      expect(titleElement).not.toBeTruthy();
    });

    it('should not call onPress when button is loading', () => {
      const mockedPress = jest.fn();
      render(<Button title="button title" loading />);

      const buttonElement = screen.getByTestId(/button/i);
      fireEvent.press(buttonElement);

      expect(mockedPress).not.toHaveBeenCalled();
    });
  });
});
