import Text from '@/elements/UI/Themed/Text';
import Box from '../Box/Box';
import { ISwitchProps } from './Switch.interfaces';
import { LayoutAnimation } from 'react-native';
import { createStyle } from './Switch.styles';
import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';

export default function Switch({ isDisable = false, onPressHandler, isOn, offLabel, onLabel }: ISwitchProps) {
  const colors = useCurrentColorScheme();
  const Styles = createStyle(colors);

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <Box style={Styles.container} withoutFeedback onPress={() => onPressHandler?.()}>
      {typeof onLabel === 'string' ? <Text>{onLabel}</Text> : onLabel}
      <Box style={[Styles.switchContainer, isOn && { backgroundColor: colors['basic-500'], justifyContent: 'flex-end' }]}>
        <Box style={Styles.thumb} />
      </Box>
      {typeof offLabel === 'string' ? <Text>{offLabel}</Text> : offLabel}
    </Box>
  );
}
