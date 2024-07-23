import Screen from '@/elements/Components/Screen/Screen';
import ChooseLanguagePopup from '@/elements/Components/ChooseLanguagePopup/ChooseLanguagePopup';
import ChooseLanguageRadioList from '@/elements/Components/ChooseLanguageRadioList/ChooseLanguageRadioList';
import Spacer from '@/elements/Components/Spacer/Spacer';

export default function Home() {
  return (
    <>
      <Screen>
        <ChooseLanguageRadioList />
        <Spacer size={16} />
        <ChooseLanguagePopup />
      </Screen>
    </>
  );
}
