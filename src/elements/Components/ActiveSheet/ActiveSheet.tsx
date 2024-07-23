import Button from '@/elements/UI/Button/Button';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { StyleSheet } from 'react-native';

const ActiveSheet = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPressHandler = () => {
    const options = ['Cancel', 'Delete', 'Save'];

    const cancelButtonIndex = 0;
    const destructiveButtonIndex = 1;

    showActionSheetWithOptions(
      {
        showSeparators: true,
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
        containerStyle: Styles.containerStyle,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case cancelButtonIndex:
            // Canceled - if you don't do anything the action you can remove this case
            break;
          case destructiveButtonIndex:
            // Delete
            break;
          case 2:
            // Save
            break;
        }
      },
    );
  };

  return <Button title="Open Menu with options" onPress={onPressHandler} />;
};

export default ActiveSheet;

const Styles = StyleSheet.create({
  containerStyle: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 30,
    marginTop: '35%',
  },
});
