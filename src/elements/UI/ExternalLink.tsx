import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Linking, Platform } from 'react-native';

const ExternalLink = (props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string; openInAppBrowser?: boolean }) => {
  const { openInAppBrowser, ...otherProps } = props;
  return (
    <Link
      target="_blank"
      {...otherProps}
      href={props.href}
      onPress={e => {
        if (openInAppBrowser) {
          e.preventDefault();
          Linking.openURL(props.href);
        } else {
          if (Platform.OS !== 'web') {
            // Prevent the default behavior of linking to the default browser on native.
            e.preventDefault();
            // Open the link in an in-app browser.
            WebBrowser.openBrowserAsync(props.href as string);
          }
        }
      }}
    />
  );
};

export default ExternalLink;
