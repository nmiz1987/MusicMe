import { ColorsType } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const createStyle = (colors: ColorsType) => {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: colors['button-primary'],
      borderRadius: 12,
      elevation: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 16,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    disableBtn: {
      backgroundColor: colors['button-disable'],
    },
    disableTxt: {
      color: colors['text-disabled'],
    },
    buttonText: {
      textAlign: 'center',
      color: colors['button-text'],
    },
  });
};
