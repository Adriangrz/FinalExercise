import {StyleSheet} from 'react-native';

import {theme} from '../../providers/ThemeProvider/theme';

const BORDER_WIDTH = 1;

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  input: {
    alignSelf: 'stretch',
    borderColor: theme.palette.gray.main,
    borderRadius: theme.spacings.sm,
    borderWidth: BORDER_WIDTH,
    fontSize: theme.fontSizes.body,
    fontWeight: '400',
    marginBottom: theme.spacings.sm,
    padding: theme.spacings.base * 2,
  },
  label: {
    alignSelf: 'stretch',
    fontSize: theme.fontSizes.body,
    fontWeight: '400',
    lineHeight: theme.spacings.lg,
    textAlign: 'left',
  },
  helper: {
    color: theme.palette.gray.dark,
    fontSize: theme.fontSizes.bodySmall,
    fontWeight: '400',
    marginBottom: theme.spacings.base,
    alignSelf: 'center',
  },
  disabled: {
    color: theme.palette.red.main,
  },
});
