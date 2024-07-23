import { ReactNode } from 'react';
import { View } from 'react-native';

export interface IKeyboardAvoidViewProps {
  children: ReactNode;
  yOffset?: number;
  style?: View['props']['style'];
}
