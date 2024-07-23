import { ColorsType } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const createStyle = (colors: ColorsType) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 6,
      alignItems: 'center',
    },
    switchContainer: {
      height: 22,
      aspectRatio: 1.8,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.border,
      backgroundColor: colors['bg-color-1'],
      borderRadius: 100,
      alignItems: 'center',
      flexDirection: 'row',
    },

    thumb: {
      height: 24,
      aspectRatio: 1,
      borderRadius: 22,
      backgroundColor: colors['bg-color-2'],
      borderWidth: 1,
      borderColor: colors.border,
    },
  });
};
