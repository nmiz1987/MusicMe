import { StyleSheet } from 'react-native';
import Box from '@/elements/Components/Box/Box';
import Text from '@/elements/UI/Themed/Text';

export default function TabTwoScreen() {
  return (
    <Box style={Styles.container}>
      <Text style={Styles.title}>Tab Two</Text>
      <Box style={Styles.separator} />
    </Box>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
