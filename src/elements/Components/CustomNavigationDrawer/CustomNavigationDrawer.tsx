import ChangeColorMode from '@/elements/UI/ChangeColorMode';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Linking, StyleSheet } from 'react-native';
import Box from '../Box/Box';
import Spacer from '../Spacer/Spacer';

function CustomNavigationDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <Spacer size={16} />
      <Box style={Styles.theme}>
        <ChangeColorMode />
      </Box>
      <Spacer size={16} />
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => Linking.openURL('https://mywebsite.com/help')} />
    </DrawerContentScrollView>
  );
}

export default CustomNavigationDrawer;

const Styles = StyleSheet.create({
  theme: {
    marginHorizontal: 10,
  },
});
