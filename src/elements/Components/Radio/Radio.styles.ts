import { ColorsType } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const createStyle = (colors: ColorsType) => {
  return StyleSheet.create({
    container: {
      borderRadius: 100,
      borderWidth: 2,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    outerDeactivate: {
      borderColor: colors.border,
    },
    outerActive: {
      borderColor: colors['basic-500'],
    },
    innerActive: {
      borderRadius: 100,
      borderColor: colors['basic-500'],
      backgroundColor: colors['basic-500'],
      height: 15,
      aspectRatio: 1,
    },
  });
};
