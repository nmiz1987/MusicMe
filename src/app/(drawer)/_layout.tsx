import Box from '@/elements/Components/Box/Box';
import CustomNavigationBar from '@/elements/Components/CustomNavigationBar';

import CustomNavigationDrawer from '@/elements/Components/CustomNavigationDrawer/CustomNavigationDrawer';
import { getDrawerTypeForBreakpoint, useBreakpoint } from '@/services/breakpoints';
import { FontAwesome, Ionicons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet } from 'react-native';

const DrawerLayout = () => {
  const breakpoint = useBreakpoint();
  const drawerType = getDrawerTypeForBreakpoint(breakpoint);

  return (
    <Drawer
      defaultStatus="closed"
      screenOptions={{
        drawerType,
        header: props => <CustomNavigationBar {...props} />,
      }}
      drawerContent={props => <CustomNavigationDrawer {...props} />}>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="network"
        options={{
          headerTitle: 'Network Info',
          drawerLabel: 'Network Info',
          drawerIcon: ({ size, color }) => <Entypo name="network" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerTitle: 'Tabs',
          drawerLabel: 'Tabs',
          drawerIcon: ({ size, color }) => <MaterialIcons name="border-bottom" size={size} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Box>
                <FontAwesome name="info-circle" size={25} color="gray" style={Styles.icon} />
              </Box>
            </Link>
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          headerTitle: 'Settings',
          drawerLabel: 'Settings',
          drawerIcon: ({ size, color }) => <AntDesign name="setting" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;

const Styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
});
