import Screen from '@/elements/Components/Screen/Screen';
import ChooseLanguagePopup from '@/elements/Components/ChooseLanguagePopup/ChooseLanguagePopup';
import Spacer from '@/elements/Components/Spacer/Spacer';
import Button from '@/elements/UI/Button/Button';
import { clearDb } from '@/services/data/sql';
import { useSQLiteContext } from 'expo-sqlite';

export default function Setting() {
  const db = useSQLiteContext();

  return (
    <>
      <Screen>
        <ChooseLanguagePopup />
        <Spacer size={16} />
        <Button title="Reset stations" onPress={() => clearDb(db)} />
      </Screen>
    </>
  );
}
