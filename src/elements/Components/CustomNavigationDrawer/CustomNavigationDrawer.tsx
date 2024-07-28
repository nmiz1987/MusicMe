import ChangeColorMode from '@/elements/UI/ChangeColorMode';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import Box from '../Box/Box';
import Spacer from '../Spacer/Spacer';
import Text from '@/elements/UI/Themed/Text';

function CustomNavigationDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <Spacer size={24} />
      <Box style={Styles.theme}>
        <ChangeColorMode />
      </Box>
      <Spacer size={60} />
      <Text style={{ textAlign: 'center' }}>Create by Netanel Mizrahi</Text>
    </DrawerContentScrollView>
  );
}

export default CustomNavigationDrawer;

const Styles = StyleSheet.create({
  theme: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
});
