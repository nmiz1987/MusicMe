import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import Box from '@/elements/Components/Box/Box';
import Text from '@/elements/UI/Themed/Text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Box style={Styles.container}>
        <Text style={Styles.title}>This screen doesn't exist.</Text>
        <Link href="/" style={Styles.link}>
          <Text style={Styles.linkText}>Go to home screen!</Text>
        </Link>
      </Box>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
