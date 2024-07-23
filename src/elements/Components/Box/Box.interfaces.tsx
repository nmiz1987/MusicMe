import { ScrollViewProps, TouchableOpacityProps, ViewStyle } from 'react-native';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type BoxProps = ThemeProps &
  TouchableOpacityProps &
  ScrollViewProps & {
    scroll?: boolean;
    horizontal?: boolean;
    ref?: any;
    withoutFeedback?: boolean;
    contentContainerStyle?: ViewStyle;
  };
