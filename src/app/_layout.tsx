import '../styles/global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as Updates from 'expo-updates';
import { ActivityIndicator, DevSettings } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { OfflineBanner } from '@/elements/Components/OfflineBanner';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { QueryClientProvider, useQuery } from '@tanstack/react-query';
import { queryClient } from '@/services/network/queryClient';
import { SQLiteProvider } from 'expo-sqlite';
import Text from '@/elements/UI/Themed/Text';
import Box from '@/elements/Components/Box/Box';
import networkService, { isOk } from '@/services/network/networkService';
import { LinksProps } from '@/constants/interfaces';
import applicationStore from '@/storage/application-store';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  const [linksLoaded, setLinksLoaded] = useState(false);

  useEffect(() => {
    async function fetchLinks() {
      console.log('start fetching');
      const res = await networkService.get(
        'https://de1.api.radio-browser.info/json/stations/search?hidebroken=true&order=clickcount&reverse=true&limit=1000',
      );
      if (isOk(res.status)) {
        console.log('fetched');
        applicationStore.setLinks(res.data);
        setLinksLoaded(true);
        return res.data as LinksProps[];
      }
      setLinksLoaded(true);

      return [];
    }
    fetchLinks();
  }, []);

  useEffect(() => {
    async function fetchUpdate() {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
          DevSettings.reload();
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (!__DEV__) fetchUpdate();
  }, []);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded && linksLoaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, linksLoaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ActionSheetProvider useCustomActionSheet>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <QueryClientProvider client={queryClient}>
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
            <Stack>
              <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            </Stack>
            <OfflineBanner />
          </QueryClientProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </ActionSheetProvider>
  );
}
