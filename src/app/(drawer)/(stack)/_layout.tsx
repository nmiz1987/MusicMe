import { useNavigation } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { DrawerContentProps } from '../_layout';
import { large, useBreakpoint } from '@/services/breakpoints';
import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';
import Box from '@/elements/Components/Box/Box';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const DrawerLayout = () => {
  const drawerNavigation = useNavigation<DrawerContentProps['navigation']>();
  const showDrawerToggleForBreakpoint = (breakpoint: string) => breakpoint !== large;
  const breakpoint = useBreakpoint();
  const showDrawerToggle = showDrawerToggleForBreakpoint(breakpoint);
  const colors = useCurrentColorScheme();

  return (
    <Stack
      screenOptions={{
        headerRight: () =>
          showDrawerToggle && (
            <Box onPress={() => drawerNavigation.toggleDrawer()} style={Styles.iconContainer}>
              <AntDesign name="menufold" size={24} color={colors.tint} />
            </Box>
          ),
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Online Radio',
          title: 'Online Radio',
        }}
      />
      <Stack.Screen
        name="StationInfo"
        options={{
          headerTitle: 'Station Info',
          title: 'Station Info',
        }}
      />
    </Stack>
  );
};

export default DrawerLayout;

const Styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    height: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
