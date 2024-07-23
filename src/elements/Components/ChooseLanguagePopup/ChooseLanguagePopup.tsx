import CustomActiveSheet, { CustomActiveSheetOptionsProps } from '@/elements/Components/ActiveSheet/CustomActiveSheet';
import countries from '@/i18n/languages';
import { I18nManager } from 'react-native';
import * as Updates from 'expo-updates';
import { setStringAsync } from '@/services/storage';

export default function ChooseLanguagePopup() {
  const options: CustomActiveSheetOptionsProps = countries.map(country => ({
    option: country.title,
    onPress: async () => {
      setStringAsync('userLanguage', JSON.stringify(country)); // will get the language from the user
      I18nManager.allowRTL(country.textDirection === 'rtl');
      I18nManager.forceRTL(country.textDirection === 'rtl');
      await Updates.reloadAsync();
    },
  }));

  return (
    <CustomActiveSheet
      label="Change Language"
      optionsList={options}
      title="Choose language"
      message="Warning: After selection the application will restart!"
    />
  );
}
