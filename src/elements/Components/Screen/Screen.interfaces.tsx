import { ScrollViewProps, ViewProps } from 'react-native';
import { StatusBarProps } from 'expo-status-bar';

export type ScreenProps = ViewProps & {
  noScroll?: boolean;
  statusBarColor?: StatusBarProps['style'];
  style?: ViewProps['style'];
  contentContainerStyle?: ScrollViewProps['style'];
};
