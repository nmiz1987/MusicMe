import { Text as DefaultText, I18nManager, Platform, TextStyle } from 'react-native';
import { FontVariantsProps, variants } from '@/styles/fontVariants';
import { EnumLanguages } from '@/i18n/interfaces';
import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  fontSize?: TextStyle['fontSize'];
  fontWeight?: 'light' | 'medium' | 'bold';
  variant?: keyof FontVariantsProps;
};

export type TextProps = ThemeProps & DefaultText['props'];

export default function Text(props: TextProps) {
  const { style, lightColor, darkColor, variant, fontSize, fontWeight, ...otherProps } = props;
  const colors = useCurrentColorScheme();
  const fontStyle = variants[I18nManager.isRTL ? EnumLanguages.Hebrew : EnumLanguages.English][variant ?? 'bodyText1'];

  const isFontSize = typeof fontSize !== 'undefined';
  const isFontWeight = typeof fontWeight !== 'undefined';

  return (
    <DefaultText
      selectable={Platform.OS === 'web'}
      style={[fontStyle, { color: colors['text-primary'] }, style, isFontSize && { fontSize }, isFontWeight && { fontWeight }]}
      {...otherProps}
    />
  );
}
