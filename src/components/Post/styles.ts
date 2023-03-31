import {StyleSheet} from 'react-native';

import {theme} from '../../providers/ThemeProvider/theme';

const BORDER_WIDTH = 1;

export const styles = StyleSheet.create({
  container: {
    borderColor: theme.palette.gray.main,
    borderRadius: theme.spacings.sm,
    borderWidth: BORDER_WIDTH,
    flex: 1,
    marginBottom: theme.spacings.sm,
    marginHorizontal: theme.spacings.sm,
    padding: theme.spacings.base * 2,
  },
});
