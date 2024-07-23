import { ColorsType } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const createStyle = (colors: ColorsType) => {
  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 17,
    },
    flag: {
      width: 25,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    flagAndName: {
      flexDirection: 'row',
      gap: 12,
    },
    bar: {
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
    },
  });
};
