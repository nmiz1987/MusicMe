import { StyleSheet } from 'react-native';
import Box from './Box/Box';
import { observer } from 'mobx-react';
import applicationStore from '@/storage/application-store';
import Text from '../UI/Themed/Text';

const NowPlaying = () => {
  return (
    <Box style={Styles.container}>
      <Text>{applicationStore.nowPlaying?.name}</Text>
    </Box>
  );
};

export default observer(NowPlaying);

const Styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderTopColor: 'black',
    flexDirection: 'row',
    gap: 8,
    height: 50,
    backgroundColor: 'white',
  },
});
