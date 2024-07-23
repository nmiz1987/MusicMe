import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Keyboard, Platform, ScrollView } from 'react-native';
import Box from '../Box/Box';
import { ScreenProps } from './Screen.interfaces';
import Styles from './Screen.styles';
import CenterColumn from '../CenterColumn';

const Screen = React.forwardRef((props: ScreenProps, ref: React.ForwardedRef<ScrollView>) => {
  const { noScroll, statusBarColor, style, contentContainerStyle, children, ...otherProps } = props;

  const box = (
    <>
      <StatusBar style={statusBarColor ?? 'auto'} />
      <Box onPress={() => Keyboard.dismiss()} withoutFeedback style={[Styles.box, style]} {...otherProps}>
        {children}
      </Box>
    </>
  );
  const webBox = <CenterColumn>{children}</CenterColumn>;

  const scrollView = (
    <>
      <StatusBar style={statusBarColor ?? 'auto'} />
      <ScrollView
        bounces={false}
        style={[Styles.scrollView, style]}
        contentContainerStyle={[Styles.scrollViewContentContainer, contentContainerStyle]}
        ref={ref}
        {...otherProps}>
        {children}
      </ScrollView>
    </>
  );

  const webScrollView = (
    <CenterColumn>
      <ScrollView
        bounces={false}
        style={Styles.scrollView}
        contentContainerStyle={[Styles.scrollViewContentContainer, style]}
        ref={ref}
        {...otherProps}>
        {children}
      </ScrollView>
    </CenterColumn>
  );

  // Align the content in the center
  if (Platform.OS === 'web') {
    if (noScroll) {
      return webBox;
    } else {
      return webScrollView;
    }
  }

  if (noScroll) {
    return box;
  }
  return scrollView;
});

Screen.displayName = 'Screen';
export default Screen;
