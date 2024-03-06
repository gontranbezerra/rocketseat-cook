import { theme } from '@/theme';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    marginTop: 22,
  },
  ingredients: {
    height: 58,
    maxHeight: 58,
  },
  recipes: { padding: 32 },
  recipesContent: { gap: 16 },
  empty: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
  },
});
