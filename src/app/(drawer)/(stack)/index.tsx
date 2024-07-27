import Screen from '@/elements/Components/Screen/Screen';
import Spacer from '@/elements/Components/Spacer/Spacer';
import { useEffect, useMemo, useState } from 'react';
import { LinksProps } from '@/constants/interfaces';
import { useSQLiteContext } from 'expo-sqlite';
import applicationStore from '@/storage/application-store';
import { init } from '@/services/data/sql';
import { observer } from 'mobx-react';
import Box from '@/elements/Components/Box/Box';
import { StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import TextInput from '@/elements/Components/TextInput/TextInput';
import Station from '@/elements/Station/Station';

const Home = () => {
  const db = useSQLiteContext();
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    db.withTransactionAsync(async () => {
      await init(db);
    });
  }, [db]);

  const links = useMemo(() => {
    return searchTerm.length === 0
      ? applicationStore.links
      : applicationStore.links?.filter(
          link =>
            link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            link.tags.toLowerCase().includes(searchTerm.toLowerCase()) ||
            link.country.toLowerCase().includes(searchTerm.toLowerCase()),
        );
  }, [searchTerm]);

  return (
    <Screen noScroll style={Styles.screen}>
      <Box style={{ paddingHorizontal: 16 }}>
        <TextInput value={searchTerm} onChangeText={(input: string) => setSearchTerm(input)} />
      </Box>
      <Spacer size={12} />
      <Box style={{ flex: 1 }}>
        <FlashList
          renderItem={({ item }) => {
            return <Station key={item.stationuuid} {...item} />;
          }}
          estimatedItemSize={50}
          data={links}
          contentContainerStyle={Styles.list}
          keyExtractor={(item: LinksProps) => item.stationuuid}
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
