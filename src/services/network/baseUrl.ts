import { Platform } from 'react-native';

function getBaseUrl() {
  if (!__DEV__) {
    if (Platform.OS === 'android') {
      // Android emulator has a different IP address for localhost
      return 'http://10.0.2.2:5000/';
    } else {
      return 'http://localhost:5000/';
    }
  } else {
    return process.env.PRODUCTION_WEB_SITE;
  }
}

const baseUrl = getBaseUrl();

export default baseUrl;
