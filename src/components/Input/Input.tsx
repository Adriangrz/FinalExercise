import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

import {useTheme} from '../../providers/ThemeProvider';
import {styles} from './styles';

interface InputProps extends TextInputProps {
  disabled?: boolean;
  helperText?: string;
  labelText?: string;
  type?: 'error' | 'info';
}

export const Input = ({
  disabled = false,
  helperText,
  labelText,
  type = 'info',
  ...props
}: InputProps): JSX.Element => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
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
    </View>
  );
};
