import React from 'react';
import {Text, TextInput, TextInputProps} from 'react-native';
import {useTheme} from '../../providers/ThemeProvider';

import {styles} from './styles';

interface InputProps extends TextInputProps {
  disabled?: boolean;
  labelText?: string;
  helperText?: string;
  type?: 'error' | 'info';
}

export const Input = ({
  disabled = false,
  labelText,
  helperText,
  type = 'info',
  ...props
}: InputProps): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      {labelText && <Text style={styles.label}>{labelText}</Text>}
      <TextInput editable={!disabled} {...props} style={styles.input} />
      {helperText && (
        <Text
          accessibilityLabel="error"
          style={[
            styles.helper,
            type === 'error' && {color: theme.palette.red.main},
          ]}>
          {helperText}
        </Text>
      )}
    </>
  );
};
