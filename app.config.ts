import type { ConfigContext, ExpoConfig } from 'expo/config';

// These values are tied to EAS. If you would like to use EAS Build or Update
// on this project while playing with it, then remove these values and run
// `eas init` and `eas update:configure` to get new values for your account.
const EAS_APP_OWNER = 'nmiz1987';

// Update this value to something unique in order to be able to build for a
// physical iOS device.
const APP_NAME = 'MusicMe';
const BUNDLE_ID_PREFIX = `com.${APP_NAME}.${EAS_APP_OWNER}`;

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getBundleID = () => {
  if (IS_DEV) return `${BUNDLE_ID_PREFIX}.dev`;
  if (IS_PREVIEW) return `${BUNDLE_ID_PREFIX}.preview`;
  return `${BUNDLE_ID_PREFIX}.app`;
};
const getAppName = () => {
  if (IS_DEV) return 'MusicMe-(Dev)';
  if (IS_PREVIEW) return 'MusicMe-(Prev)';
  return APP_NAME;
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: 'musicme',
  scheme: 'MusicMe',
  owner: EAS_APP_OWNER,
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#60a5fa',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: getBundleID(),
  },
  android: {
    package: getBundleID(),
    permissions: ['android.permission.RECORD_AUDIO'],
  },
  extra: {
    eas: {
      projectId: '092b0ede-4bb2-4d86-b1e1-d8b50891f2aa',
    },
  },
  web: {
    bundler: 'metro',
    output: 'server',
    favicon: './src/assets/images/favicon.png',
  },
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          compileSdkVersion: 34,
          targetSdkVersion: 34,
          buildToolsVersion: '34.0.0',
          usesCleartextTraffic: true,
        },
        ios: {
          deploymentTarget: '13.4',
          usesCleartextTraffic: true,
        },
      },
    ],
    'expo-asset',
    [
      'expo-router',
      {
        origin: process.env.PRODUCTION_WEB_SITE,
      },
    ],
    'expo-localization',
    [
      'expo-document-picker',
      {
        iCloudContainerEnvironment: 'Production',
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission: 'The app accesses your photos to let you share them with your friends.',
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});
