import Text, { TextProps } from '@/elements/UI/Themed/Text';
import React, { useEffect } from 'react';
import { Animated, Easing, Platform } from 'react-native';

interface GlitchTextProps extends TextProps {
  children: string;
}

export function GlitchText(props: GlitchTextProps) {
  const { children, ...otherProps } = props;
  const text = useGlitchText(children);

  return <Text {...otherProps}>{text}</Text>;
}

export function useGlitchText(children: string) {
  const [text, setText] = React.useState(() => randCharFromText(children));

  const animated = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const arr1: string[] = children.split('');
    const arr2: string[] = [];

    //fill arr2 with random characters
    arr1.forEach((_, i) => (arr2[i] = randChar()));

    let step = 0;

    animated.addListener(({ value }) => {
      const p = Math.floor(value * arr1.length);
      if (step !== p) {
        step = p;
        arr1.forEach((_, i) => (arr2[i] = randChar()));
        const pt1 = arr1.join('').substring(p, 0);
        const pt2 = arr2.join('').substring(arr2.length - p, 0);
        setText(pt1 + pt2);
      }
    });

    Animated.timing(animated, {
      toValue: 1.1,
      duration: 800 * arr1.length,
      easing: Easing.inOut(Easing.exp),
      useNativeDriver: Platform.OS !== 'web',
      delay: 0,
    }).start();
  }, [animated, children]);

  return text;
}

function randChar() {
  let c = 'abcdefghijklmnopqrstuvwxyz';
  c = c[Math.floor(Math.random() * c.length)];
  return c;
}

function randCharFromText(text: string) {
  const c = 'abcdefghijklmnopqrstuvwxyz';
  return text
    .split('')
    .map(char => c[Math.floor(Math.random() * c.length)])
    .join('');
}
