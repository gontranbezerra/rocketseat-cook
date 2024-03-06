import { theme } from '@/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 8,
    paddingTop: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    marginTop: 22,
  },
  recipes: {},
  recipesContent: {},
  empty: {},
});
