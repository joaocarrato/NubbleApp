import React, { useState } from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Icon } from '../Icon/Icon';

type InputPasswordProps = Omit<TextInputProps, 'rightComponent'>;

export function InputPassword(inputPasswordProps: InputPasswordProps) {
  const [isSecurityTextEntry, setIsSecurityTextEntry] = useState(true);

  function toggleSecurityTextEntry() {
    setIsSecurityTextEntry(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecurityTextEntry}
      {...inputPasswordProps}
      rightComponent={
        <Icon
          onPress={toggleSecurityTextEntry}
          name={isSecurityTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
    />
  );
}
