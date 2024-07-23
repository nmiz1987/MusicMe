import { forwardRef } from 'react';
import { Pressable, TouchableOpacity, ScrollView, View } from 'react-native';
import { BoxProps } from './Box.interfaces';
import { useThemeColor } from '@/hooks/useThemeColor';

const Box = forwardRef((props: BoxProps, ref: any): JSX.Element => {
  const {
    children,
    onPress,
    withoutFeedback,
    style,
    scroll,
    horizontal,
    contentContainerStyle,
    showsVerticalScrollIndicator,
    showsHorizontalScrollIndicator,
    lightColor,
    darkColor,
    ...otherProps
  } = props;

  const backgroundColor = useThemeColor({
    light: lightColor,
    dark: darkColor,
  });

  const isBackgroundColor = typeof backgroundColor !== 'undefined';

  const ViewBox = (
    <View ref={props.ref} style={[style, isBackgroundColor && { backgroundColor }]} {...otherProps}>
      {children}
    </View>
  );
  const ScrollBox = (
    <ScrollView
      ref={ref}
      bounces={false}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator ?? false}
      showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator ?? true}
      {...otherProps}>
      {props.children}
    </ScrollView>
  );

  const PressBox = (
    <Pressable ref={props.ref} style={[style, isBackgroundColor && { backgroundColor }]} onPress={props.onPress} {...props}>
      {props.children}
    </Pressable>
  );

  const TouchBox = (
    <TouchableOpacity
      activeOpacity={0.5}
      ref={props.ref}
      style={[style, isBackgroundColor && { backgroundColor }]}
      onPress={props.onPress}
      {...props}>
      {props.children}
    </TouchableOpacity>
  );

  if (props?.onPress) {
    if (props?.withoutFeedback) return PressBox;
    return TouchBox;
  } else {
    if (props?.scroll) return ScrollBox;
    return ViewBox;
  }
});

Box.displayName = 'Box';
export default Box;
