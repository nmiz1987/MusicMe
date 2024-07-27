import Screen from '@/elements/Components/Screen/Screen';
import { Stack, useLocalSearchParams } from 'expo-router';
import { LinksProps } from '@/constants/interfaces';
import applicationStore from '@/storage/application-store';
import Box from '@/elements/Components/Box/Box';
import { I18nManager, StyleSheet, useColorScheme } from 'react-native';
import Text from '@/elements/UI/Themed/Text';
import { Audio } from 'expo-av';
import { useEffect, useMemo, useState } from 'react';
import Spacer from '@/elements/Components/Spacer/Spacer';
import { Image } from 'expo-image';
import Tag from '@/elements/Components/Tag';
import { AntDesign } from '@expo/vector-icons';
import ExternalLink from '@/elements/UI/ExternalLink';
import Button from '@/elements/UI/Button/Button';

const StationInfo = () => {
  const { stationuuid } = useLocalSearchParams();
  const [sound, setSound] = useState<Audio.Sound>();
  const scheme = useColorScheme();

  const station = useMemo(() => applicationStore.links.find((link: LinksProps) => link.stationuuid === stationuuid), [stationuuid]);

  // const media = useMemo(async () => (await Audio.Sound.createAsync({ uri: station!.url_resolved })).sound, [station]);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  if (!station) {
    return (
      <Screen>
        <Text variant="h2">Station not found</Text>
      </Screen>
    );
  }

  const playHandler = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: station.url });
    setSound(sound);

    await sound.playAsync();
  };

  const stopHandler = async () => {
    sound?.stopAsync();
  };

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <>
      <Stack.Screen options={{ title: 'Station Info' }} />
      <Screen>
        <Box style={Styles.imageContainer}>
          <Image style={Styles.image} source={station.favicon} placeholder={{ blurhash }} contentFit="cover" transition={500} />
        </Box>
        <Text style={{ textAlign: 'center' }} variant="h2">
          {station.name}
        </Text>
        {station.homepage && (
          <Box style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <ExternalLink href={station.homepage}>
              <AntDesign name="home" size={36} color={scheme === 'dark' ? 'white' : 'black'} />
            </ExternalLink>
          </Box>
        )}
        <Spacer size={16} />
        <Box style={{ flexDirection: 'row', gap: 4, justifyContent: 'center' }}>
          <Button style={{ flex: 1 }} title="Play" onPress={playHandler} feedbackOnPress />
          <Button style={{ flex: 1 }} title="Stop" onPress={stopHandler} feedbackOnPress />
        </Box>
        <Spacer size={24} />

        <Box style={Styles.infoList}>
          {station.country && (
            <Box style={Styles.row}>
              <Text style={Styles.title}>Country:</Text>
              <Text style={Styles.info} variant="bodyText1">
                {station.country}
              </Text>
            </Box>
          )}

          {station.state && (
            <Box style={Styles.row}>
              <Text style={Styles.title}>state:</Text>
              <Text style={Styles.info} variant="bodyText1">
                {station.state}
              </Text>
            </Box>
          )}

          {station.language && (
            <Box style={Styles.row}>
              <Text style={Styles.title}>Language:</Text>
              <Text style={Styles.info} variant="bodyText1">
                {station.language}
              </Text>
            </Box>
          )}

          {station.tags && (
            <Box style={Styles.row}>
              <Text style={Styles.title}>Tags:</Text>
              <Box style={Styles.tagsContainer}>
                {station.tags.split(',').map(tag => (
                  <Tag key={tag} label={tag.trim()} />
                ))}
              </Box>
            </Box>
          )}

          {station.bitrate && (
            <Box style={Styles.row}>
              <Text style={Styles.title}>Bitrate:</Text>
              <Text style={Styles.info} variant="bodyText1">
                {station.bitrate}
              </Text>
            </Box>
          )}

          <Box style={Styles.row}>
            <Text style={Styles.title}>codec:</Text>
            <Text style={Styles.info} variant="bodyText1">
              {station.codec}
            </Text>
          </Box>

          {station.lastchangetime && (
            <Box style={Styles.row}>
              <Text style={Styles.title}>Last update:</Text>
              <Text style={Styles.info} variant="bodyText1">
                {station.lastchangetime}
              </Text>
            </Box>
          )}

          {station.votes && (
            <Box style={Styles.row}>
              <Text style={Styles.title}>Votes:</Text>
              <Text style={Styles.info} variant="bodyText1">
                {station.votes}
              </Text>
            </Box>
          )}
        </Box>

        <Spacer size={16} />
      </Screen>
    </>
  );
};

export default StationInfo;

const Styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  row: {
    gap: 4,
  },
  info: {
    flex: 1,
  },
  infoList: {
    gap: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  tagsContainer: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
});
