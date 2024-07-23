# Useful addition packages

There are a lot of other packages that I didn't add to this template because I wanted to keep in minimal and clean, but you should check them and use them.

## react native vision camera

- link: [https://react-native-vision-camera.com/]()
- description: A powerful, high-performance React Native Camera library.

---

## @expo/html-elements

- link: [https://www.npmjs.com/package/@expo/html-elements]()
- description: Generate html tag (h1, table, etc.) when converting Expo React-Native app to html website (by default everything will convert to div and affects SEO)
- Example:

```tsx
import { H1 } from '@expo/html-elements';
export default () => <H1>Example<H1/>
```

---

## FlashList

- link: [https://shopify.github.io/flash-list/]()
- description: Fast & Performant React Native List.
- Example:

```tsx
<FlashList
  renderItem={({ item }) => {
    return <TweetCell item={item} />;
  }}
  estimatedItemSize={50}
  data={tweets}
/>
```

---

## autoprefixer

- links: [https://www.npmjs.com/package/autoprefixer](), [https://www.npmjs.com/package/postcss-scss]()
- description: PostCSS plugin to parse CSS and add vendor prefixes to CSS rules. Useful when creating websites using React-Native.
-
- Before parsing:

```css
::placeholder {
  color: gray;
}

.image {
  background-image: url(image@1x.png);
}
@media (min-resolution: 2dppx) {
  .image {
    background-image: url(image@2x.png);
  }
}
```

- After parsing:

```css
::-moz-placeholder {
  color: gray;
}
::placeholder {
  color: gray;
}

.image {
  background-image: url(image@1x.png);
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  .image {
    background-image: url(image@2x.png);
  }
}
```

---

## react-native-web-hooks

- link: [https://www.npmjs.com/package/react-native-web-hooks]()
- description: Gives you extra hooks to use in web-sites
- Example:

```tsx
import { useRef } from 'react';
import { StyleSheet, Linking, Text, Platform } from 'react-native';

import { useHover, useFocus, useActive } from 'react-native-web-hooks';

function Link({ children, href = '#' }) {
  const ref = useRef(null);

  const isHovered = useHover(ref);
  const isFocused = useFocus(ref);
  const isActive = useActive(ref);

  return (
    <Text
      accessibilityRole="link"
      href={href}
      draggable={false}
      onPress={() => Linking.openURL(href)}
      tabIndex={0}
      ref={ref}
      style={[styles.text, isHovered && styles.hover, isFocused && styles.focused, isActive && styles.active]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      web: {
        cursor: 'pointer',
        outlineStyle: 'none',
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
        transitionDuration: '200ms',
      },
      default: {},
    }),
  },
  active: {
    color: 'blue',
    borderBottomColor: 'blue',
    opacity: 1.0,
  },
  hover: {
    opacity: 0.6,
  },
  focused: {
    borderBottomColor: 'black',
  },
});
```

---
