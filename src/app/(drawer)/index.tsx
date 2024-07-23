import Screen from '@/elements/Components/Screen/Screen';
import TextInput from '@/elements/Components/TextInput/TextInput';
import ChangeColorMode from '@/elements/UI/ChangeColorMode';
import Text from '@/elements/UI/Themed/Text';
import { Stack } from 'expo-router';
import Button from '@/elements/UI/Button/Button';
import { i18n, t } from '@/i18n';
import { GlitchText } from '@/hooks/useGlitchText';
import { formatFullDate, getCurrentTimezone, getDateByFormat } from '@/utils/dateFormat';
import ActiveSheet from '@/elements/Components/ActiveSheet/ActiveSheet';
import KeyboardAvoidView from '@/elements/Components/KeyboardAvoidView/KeyboardAvoidView';
import Spacer from '@/elements/Components/Spacer/Spacer';
import Head from 'expo-router/head';
import axios from 'axios';

export default function Home() {
  const fetchApi = async () => {
    const response = await axios.get('/api/hello?post=John');
    console.log(response.data);
  };

  return (
    <>
      <Head>
        <title>My Website</title>
        <meta name="description" content="This is an example for meta tag." />
      </Head>
      <KeyboardAvoidView>
        <Stack.Screen options={{ title: 'Title from the component' }} />
        <Screen>
          <Button title="Fetch API" onPress={fetchApi} feedbackOnPress />
          <ChangeColorMode />
          <Text>The current language is: {i18n.locale}</Text>
          <Text>{t('home.title')}</Text>
          <GlitchText variant="h1">GlitchText</GlitchText>
          <Text>{formatFullDate(new Date())}</Text>
          <Text>{getDateByFormat(new Date(), 'MM/dd/yyyy')}</Text>
          <Text>{getCurrentTimezone()}</Text>
          <Text variant="h1">H1</Text>
          <Text variant="h2">H2</Text>
          <Text variant="h3">H3</Text>
          <Text variant="h4">H4</Text>
          <Text variant="h5">H5</Text>
          <Text variant="h6">H6</Text>
          <Text variant="h7">H7</Text>
          <Text variant="bodyText1">BodyText1</Text>
          <Text variant="bodyText2">BodyText2</Text>
          <Text variant="bodyText3">BodyText3</Text>
          <Text variant="bodyText4">BodyText4</Text>
          <Text variant="link">Link</Text>
          <Text variant="bodyTextSmallHighlight">BodyTextSmallHighlight</Text>
          <Text variant="bodyTextSmall">BodyTextSmall</Text>
          <Text variant="h1">Warning!</Text>
          <Spacer size={12} />
          <TextInput />
          <Spacer size={12} />
          <Button title="Hi" onPress={() => console.log('print hi')} feedbackOnPress />
          <Spacer size={12} />
          <ActiveSheet />
        </Screen>
      </KeyboardAvoidView>
    </>
  );
}
