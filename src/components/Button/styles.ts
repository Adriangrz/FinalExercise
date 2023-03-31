import {StyleSheet} from 'react-native';

import {theme} from '../../providers/ThemeProvider/theme';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacings.sm,
    justifyContent: 'center',
    paddingVertical: theme.spacings.base * 2,
  },
  text: {
    color: theme.palette.white.main,
    fontSize: theme.fontSizes.body,
    fontWeight: '700',
    lineHeight: theme.spacings.md,
  },
});
