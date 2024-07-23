import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import Text from '@/elements/UI/Themed/Text';
import { Stack } from 'expo-router';
import ChooseLanguage from '@/elements/Components/ChooseLanguageRadioList/ChooseLanguageRadioList';
import Screen from '@/elements/Components/Screen/Screen';
import { BackButton } from '@/elements/UI/BackButton';

export default function ModalScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => <BackButton />,
        }}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Screen contentContainerStyle={Styles.container}>
        <Text style={Styles.title}>Change language</Text>
        <ChooseLanguage />
      </Screen>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
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
