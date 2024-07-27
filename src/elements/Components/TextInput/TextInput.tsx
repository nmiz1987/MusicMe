import { useRef, useState } from 'react';
import { Button, I18nManager, InputAccessoryView, Platform, TextInput as RNTextInput } from 'react-native';
import { TextInputProps } from './TextInput.interfaces';
import { createStyle } from './TextInput.styles';
import { t } from '@/i18n';
import Box from '../Box/Box';
import Spacer from '../Spacer/Spacer';
import Text from '@/elements/UI/Themed/Text';
import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';

const TextInput = ({ label, caption, iconLeft, iconRight, onIconLeftPress, onIconRightPress, isError, ...props }: TextInputProps) => {
  const inputRef = useRef<RNTextInput>(null);
  const colors = useCurrentColorScheme();
  const Styles = createStyle(colors);
  const [isInputFocus, setIsInputFocus] = useState(false);

  return (
    <Box withoutFeedback onPress={() => inputRef.current?.focus()}>
      {label && <Text>{label}</Text>}
      <Spacer size={8} />
      {Platform.OS === 'ios' && (
        <InputAccessoryView nativeID="inputID">
          <Button title={t('app.keyboard')} onPress={() => inputRef?.current?.blur()} />
        </InputAccessoryView>
      )}
      <Box style={[Styles.container, isInputFocus && Styles.focus, !isInputFocus && isError && Styles.error]}>
        {iconLeft && (
          <Box onPress={() => onIconLeftPress?.()} withoutFeedback style={Styles.iconLeft}>
            {iconLeft}
          </Box>
        )}
        <RNTextInput
          ref={inputRef}
          inputAccessoryViewID="inputID"
          style={Styles.input}
          onFocus={() => setIsInputFocus(true)}
          onBlur={() => setIsInputFocus(false)}
          placeholderTextColor={Styles.placeholderColor.color}
          {...props}
        />
        {iconRight && (
          <Box onPress={() => onIconRightPress?.()} withoutFeedback style={Styles.iconRight}>
            {iconRight}
          </Box>
        )}
      </Box>
      {caption && <Text>{caption}</Text>}
    </Box>
  );
};

export default TextInput;
