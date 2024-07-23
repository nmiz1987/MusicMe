import { TextStyle } from 'react-native';
import { EnumLanguages } from '@/i18n/interfaces';

export interface FontVariantsProps {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  h7: TextStyle;
  bodyText1: TextStyle;
  bodyText2: TextStyle;
  bodyText3: TextStyle;
  bodyText4: TextStyle;
  link: TextStyle;
  bodyTextSmallHighlight: TextStyle;
  bodyTextSmall: TextStyle;
}

type VariantsProps = {
  [EnumLanguages.Hebrew]: FontVariantsProps;
  [EnumLanguages.English]: FontVariantsProps;
};

export const variants: VariantsProps = {
  [EnumLanguages.Hebrew]: {
    h1: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 28,
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 24,
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 20,
    },
    h4: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
    },
    h5: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 16,
    },
    h6: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 15,
    },
    h7: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 14,
    },
    bodyText1: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
    },
    bodyText2: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
    },
    bodyText3: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 14,
    },
    bodyText4: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
    },
    link: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,

      textDecorationLine: 'underline',
    },
    bodyTextSmallHighlight: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 13,
    },
    bodyTextSmall: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
    },
  },
  [EnumLanguages.English]: {
    h1: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 28,
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 24,
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 20,
    },
    h4: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
    },
    h5: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 16,
    },
    h6: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 15,
    },
    h7: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 14,
    },
    bodyText1: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
    },
    bodyText2: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
    },
    bodyText3: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 14,
    },
    bodyText4: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
    },
    link: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,

      textDecorationLine: 'underline',
    },
    bodyTextSmallHighlight: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 13,
    },
    bodyTextSmall: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
    },
  },
};
