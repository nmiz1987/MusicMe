import type { ConfigContext, ExpoConfig } from 'expo/config';

// These values are tied to EAS. If you would like to use EAS Build or Update
// on this project while playing with it, then remove these values and run
// `eas init` and `eas update:configure` to get new values for your account.
const EAS_UPDATE_URL = '';
const EAS_APP_OWNER = 'nmiz1987';

// Update this value to something unique in order to be able to build for a
// physical iOS device.
const BUNDLE_ID_PREFIX = 'your.bundle.identifier';
const APP_NAME = 'MusicMe';

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getBundleID = () => {
  if (IS_DEV) return `${BUNDLE_ID_PREFIX}.dev`;
  if (IS_PREVIEW) return `${BUNDLE_ID_PREFIX}.preview`;
  return `${BUNDLE_ID_PREFIX}.app`;
};
const getAppName = () => {
  if (IS_DEV) return `${APP_NAME} (Dev)`;
  if (IS_PREVIEW) return `${APP_NAME} (Prev)`;
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
    resizeMode: 'contain',
    backgroundColor: '#60a5fa',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: getBundleID(),
  },
  android: {
    package: getBundleID(),
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      monochromeImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#60a5fa',
    },
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
  updates: {
    enabled: true,
    checkAutomatically: 'ON_LOAD',
    fallbackToCacheTimeout: 0,
    url: EAS_UPDATE_URL,
  },
  experiments: {
    typedRoutes: true,
  },
});
