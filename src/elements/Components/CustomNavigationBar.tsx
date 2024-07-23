import { large, useBreakpoint } from '@/services/breakpoints';
import Box from './Box/Box';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import Text from '@/elements/UI/Themed/Text';
import { StyleSheet } from 'react-native';
import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CustomNavigationBarProps extends DrawerHeaderProps {}

const CustomNavigationBar = ({ navigation, options }: CustomNavigationBarProps) => {
  const showDrawerToggleForBreakpoint = (breakpoint: string) => breakpoint !== large;
  const breakpoint = useBreakpoint();
  const showDrawerToggle = showDrawerToggleForBreakpoint(breakpoint);
  const colors = useCurrentColorScheme();
  const insets = useSafeAreaInsets();

  // title can be a string or a component!
  const getTitle = () => {
    if (options?.headerTitle) {
      if (typeof options.headerTitle === 'string') {
        return <Text variant="h1">{options.headerTitle}</Text>;
      } else if (typeof options.headerTitle === 'function') {
        //@ts-ignore
        return <>{options.headerTitle()}</>;
      }
    }

    if (options?.title) {
      return <Text variant="h1">{options.title}</Text>;
    }

    return <Box />;
  };

  return (
    <Box
      lightColor="white"
      darkColor="black"
      style={[
        Styles.container,
        { paddingTop: insets.top + 4, paddingBottom: 4, borderBottomColor: colors['navbar-bottom'], borderBottomWidth: 1 },
        Styles.shadow,
      ]}>
      {showDrawerToggle ? (
        <Box onPress={() => navigation.toggleDrawer()} style={Styles.iconContainer}>
          <AntDesign name="menufold" size={24} color={colors.tint} />
        </Box>
      ) : (
        <Box style={Styles.iconContainer} />
      )}
      {getTitle()}
      <Box style={Styles.iconContainer} />
    </Box>
  );
};

export default CustomNavigationBar;

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
  iconContainer: {
    height: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
