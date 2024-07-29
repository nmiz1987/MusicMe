import Screen from '@/elements/Components/Screen/Screen';
import Spacer from '@/elements/Components/Spacer/Spacer';
import { useCallback, useState } from 'react';
import { LinksProps } from '@/constants/interfaces';
import applicationStore from '@/storage/application-store';
import { observer } from 'mobx-react';
import Box from '@/elements/Components/Box/Box';
import { StyleSheet, RefreshControl, useColorScheme } from 'react-native';
import TextInput from '@/elements/Components/TextInput/TextInput';
import { FlatList } from 'react-native-gesture-handler';
import Text from '@/elements/UI/Themed/Text';
import Station from '@/elements/Components/Station/Station';
import { fetchLinks } from '@/app/api/fetchLinks';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [refreshing, setRefreshing] = useState(false);

  const scheme = useColorScheme();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchLinks().then(() => setRefreshing(false));
  }, []);

  return (
    <Screen noScroll style={Styles.screen}>
      <Spacer size={12} />
      <Box style={{ paddingHorizontal: 16, flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <Box style={{ flex: 1 }}>
          <TextInput placeholder="Search by name, tag and country..." value={searchTerm} onChangeText={(input: string) => setSearchTerm(input)} />
        </Box>
        <Box onPress={onRefresh} style={Styles.refreshContainer}>
          <FontAwesome name="refresh" size={24} color={scheme === 'dark' ? 'white' : 'black'} />
        </Box>
      </Box>
      <Spacer size={12} />
      {refreshing ? (
        <Box style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>Reloading the station list...</Text>
        </Box>
      ) : (
        <Box style={{ flex: 1 }}>
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            style={Styles.list}
            contentContainerStyle={Styles.listContainer}
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
      )}
    </Screen>
  );
};

export default observer(Home);

const Styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
  },
  list: {
    paddingVertical: 20,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  refreshContainer: {
    borderRadius: 12,
    aspectRatio: 1,
    width: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
