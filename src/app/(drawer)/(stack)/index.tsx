import Screen from '@/elements/Components/Screen/Screen';
import Spacer from '@/elements/Components/Spacer/Spacer';
import { useState } from 'react';
import { LinksProps } from '@/constants/interfaces';
import applicationStore from '@/storage/application-store';
import { observer } from 'mobx-react';
import Box from '@/elements/Components/Box/Box';
import { StyleSheet } from 'react-native';
import TextInput from '@/elements/Components/TextInput/TextInput';
import Station from '@/elements/Station/Station';
import { FlatList } from 'react-native-gesture-handler';
import Text from '@/elements/UI/Themed/Text';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <Screen noScroll style={Styles.screen}>
      <Box style={{ paddingHorizontal: 16 }}>
        <TextInput value={searchTerm} onChangeText={(input: string) => setSearchTerm(input)} />
      </Box>
      <Spacer size={12} />
      <Box style={{ flex: 1 }}>
        <FlatList
          style={Styles.list}
          contentContainerStyle={Styles.listContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => {
            return (
              <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No stations found</Text>
              </Box>
            );
          }}
          keyExtractor={(item: LinksProps) => item.stationuuid}
          data={
            searchTerm.length === 0
              ? applicationStore.links
              : applicationStore.links?.filter(
                  link =>
                    link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    link.tags.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    link.country.toLowerCase().includes(searchTerm.toLowerCase()),
                )
          }
          renderItem={({ item }) => {
            return <Station key={item.stationuuid} {...item} />;
          }}
          ItemSeparatorComponent={() => <Spacer size={12} />}
        />
      </Box>
    </Screen>
  );
};

export default observer(Home);

const Styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
  },
  list: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  listContainer: {
    flex: 1,
  },
});
