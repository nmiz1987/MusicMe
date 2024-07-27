import { ColorsType } from '@/styles/colors';
import { I18nManager, StyleSheet } from 'react-native';

export const createStyle = (colors: ColorsType) => {
  return StyleSheet.create({
    container: {
      padding: 15,
      borderRadius: 15,
      elevation: 8,
      backgroundColor: colors['bg-color-2'],
      shadowColor: '#000',
      shadowRadius: 8,
      shadowOffset: {
        width: 6,
        height: 0,
      },
      flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
      gap: 8,
      shadowOpacity: 0.15,
    },
    info: {
      flex: 1,
      gap: 4,
    },

    image: {
      height: 50,
      width: 50,
    },
    tagsContainer: {
      flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      flexWrap: 'wrap',
      gap: 4,
    },
  });
};
