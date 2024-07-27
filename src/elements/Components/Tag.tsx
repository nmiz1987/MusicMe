import Box from './Box/Box';
import Text from '@/elements/UI/Themed/Text';
import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';
import { StyleSheet } from 'react-native';

interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps) => {
  const colors = useCurrentColorScheme();
  return (
    <Box style={[Styles.container, { borderColor: colors.border }]}>
      <Text variant="bodyTextSmall">{label}</Text>
    </Box>
  );
};

export default Tag;

const Styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    flexDirection: 'row',
  },
});
