import { LinksProps } from '@/constants/interfaces';
import Box from '../Components/Box/Box';
import Text from '@/elements/UI/Themed/Text';
import { Image } from 'expo-image';
import Tag from '../Components/Tag';
import { Link } from 'expo-router';
import { createStyle } from './Station.styles';
import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';

interface StationProps extends LinksProps {}

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Station = ({ name, country, favicon, language, tags, stationuuid }: StationProps) => {
  const colors = useCurrentColorScheme();
  const Styles = createStyle(colors);

  return (
    <Link href={{ pathname: './StationInfo', params: { stationuuid } }} asChild>
      <Box style={Styles.container}>
        <Image style={Styles.image} source={favicon} placeholder={{ blurhash }} contentFit="cover" transition={500} />
        <Box style={Styles.info}>
          <Text variant="h4">{name}</Text>
          <Text variant="bodyTextSmall">Country: {country}</Text>
          <Text variant="bodyTextSmall">Language: {language}</Text>
          <Box style={Styles.tagsContainer}>
            {tags.split(',').map(tag => {
              if (tag.length === 0) return null;
              return <Tag key={tag} label={tag.trim()} />;
            })}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Station;
