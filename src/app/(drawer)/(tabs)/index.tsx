import { StyleSheet } from 'react-native';
import Text from '@/elements/UI/Themed/Text';
import Screen from '@/elements/Components/Screen/Screen';
import { useRef } from 'react';
import { useScrollToTop } from '@react-navigation/native';
import { Link } from 'expo-router';
import Spacer from '@/elements/Components/Spacer/Spacer';

export default function TabOneScreen() {
  const tabRef = useRef(null);
  useScrollToTop(tabRef); // scroll to top when the current tab is pressed

  return (
    <Screen ref={tabRef} contentContainerStyle={Styles.container}>
      <Text style={Styles.title}>Tab One</Text>
      <Spacer size={16} />
      <Link href="modal">
        <Text variant="link">Open Modal</Text>
      </Link>
    </Screen>
  );
}

const Styles = StyleSheet.create({
  container: {
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
