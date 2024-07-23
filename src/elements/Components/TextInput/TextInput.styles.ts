import { ColorsType } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const createStyle = (colors: ColorsType) => {
  return StyleSheet.create({
    container: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 12,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: colors['bg-color-2'],
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.border,
    },
    focus: {
      borderColor: colors.border,
      borderWidth: StyleSheet.hairlineWidth,
      shadowColor: colors['shadow-blue'],
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.7,
      shadowRadius: 5.5,
      elevation: 10,
    },
    error: {
      backgroundColor: colors['danger-300'],
      borderWidth: 1,
      borderColor: colors.border,
    },
    iconLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 8,
    },
    iconRight: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 8,
    },
    input: {
      color: colors['text-primary'],
      flex: 1,
    },
    placeholderColor: {
      color: colors['text-placeholder'],
    },
  });
};
