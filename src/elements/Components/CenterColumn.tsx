import { StyleSheet } from 'react-native';
import Box from './Box/Box';

export default function CenterColumn({ children }) {
  return (
    <Box style={styles.columnWrapper}>
      <Box style={styles.column}>{children}</Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  column: {
    flex: 1,
    maxWidth: 640, // fits sub-12.9 ipad portrait and half high-res 13" screen
  },
});
