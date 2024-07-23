import { forwardRef } from 'react';
import { Platform, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Text from '../Themed/Text';
import { createStyle } from './Button.styles';
import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';
import * as Haptics from 'expo-haptics';

type ButtonProps = {
  title: string;
  onPress: () => void;
  feedbackOnPress?: boolean;
} & TouchableOpacityProps;

const Button = forwardRef<TouchableOpacity, ButtonProps>(({ title, onPress, feedbackOnPress = false, disabled = false, ...touchableProps }, ref) => {
  const colors = useCurrentColorScheme();
  const Styles = createStyle(colors);

  return (
    <TouchableOpacity
      ref={ref}
      onPress={() => {
        if (disabled) return;
        if (Platform.OS !== 'web' && feedbackOnPress) {
          Haptics.selectionAsync();
        }
        onPress();
      }}
      {...touchableProps}
      activeOpacity={disabled ? 1 : 0.6}
      style={[Styles.button, !disabled && Styles.shadow, touchableProps.style, disabled && Styles.disableBtn]}>
      <Text variant="h5" style={[Styles.buttonText, disabled && Styles.disableTxt]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';
export default Button;
