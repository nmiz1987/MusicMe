import { createStyle } from './ChooseLanguageRadioList.styles';
import { I18nManager } from 'react-native';
import * as Updates from 'expo-updates';
import Box from '../Box/Box';
import countries from '@/i18n/languages';
import Text from '@/elements/UI/Themed/Text';
import Radio from '../Radio/Radio';
import { i18n } from '@/i18n';
import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';
import { setStringAsync } from '@/services/storage';

export default function ChooseLanguageRadioList() {
  const colors = useCurrentColorScheme();
  const Styles = createStyle(colors);

  return (
    <Box>
      {countries.map((country, index) => {
        return (
          <Box
            key={index}
            onPress={async () => {
              setStringAsync('userLanguage', JSON.stringify(country)); // will get the language from the user
              I18nManager.allowRTL(country.textDirection === 'rtl');
              I18nManager.forceRTL(country.textDirection === 'rtl');
              await Updates.reloadAsync();
            }}
            style={[Styles.row, index < countries.length - 1 && Styles.bar]}>
            <Box style={Styles.flagAndName}>
              <Text variant="bodyText1">{country.title}</Text>
            </Box>
            <Radio status={country.language === i18n.locale} />
          </Box>
        );
      })}
    </Box>
  );
}
