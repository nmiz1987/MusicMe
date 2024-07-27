import '../styles/global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as Updates from 'expo-updates';
import { ActivityIndicator, DevSettings } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { OfflineBanner } from '@/elements/Components/OfflineBanner';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/services/network/queryClient';
import { SQLiteProvider } from 'expo-sqlite';
import Text from '@/elements/UI/Themed/Text';
import Box from '@/elements/Components/Box/Box';

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

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

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

  return (
    <React.Suspense
      fallback={
        <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
          <Text fontSize={30}>Loading stations...</Text>
        </Box>
      }>
      <SQLiteProvider databaseName="test.db" assetSource={{ assetId: require('../assets/mySQLiteDB.db') }} useSuspense>
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
      </SQLiteProvider>
    </React.Suspense>
  );
}
