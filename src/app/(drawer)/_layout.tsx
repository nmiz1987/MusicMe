import CustomDrawerNavigationBar from '@/elements/Components/CustomDrawerNavigationBar';
import CustomNavigationDrawer from '@/elements/Components/CustomNavigationDrawer/CustomNavigationDrawer';
import { getDrawerTypeForBreakpoint, useBreakpoint } from '@/services/breakpoints';
import { Ionicons } from '@expo/vector-icons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

export type RootDrawerParamList = {
  stations: undefined;
  settings: undefined;
};
export type DrawerContentProps = DrawerScreenProps<RootDrawerParamList, 'stations'>;

const DrawerLayout = () => {
  const breakpoint = useBreakpoint();
  const drawerType = getDrawerTypeForBreakpoint(breakpoint);

  return (
    <Drawer
      defaultStatus="closed"
      screenOptions={{
        drawerType,
        header: props => <CustomDrawerNavigationBar {...props} />,
      }}
      drawerContent={props => <CustomNavigationDrawer {...props} />}>
      <Drawer.Screen
        name="(stack)"
        options={{
          headerShown: false,
          headerTitle: 'Online Radio',
          drawerLabel: 'Online Radio',
          drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
