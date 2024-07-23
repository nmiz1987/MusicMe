declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.mdx' {
  function Component(props: any): JSX.Element;
  export default Component;
}
