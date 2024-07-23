import { TextInput } from 'react-native';

type RNTextInputProps = TextInput['props'];

export type TextInputProps = RNTextInputProps & {
  label?: string;
  caption?: string;
  iconLeft?: React.ReactNode;
  onIconLeftPress?: () => void;
  iconRight?: React.ReactNode;
  onIconRightPress?: () => void;
  isError?: boolean;
};
