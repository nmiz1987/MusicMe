import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import Entypo from '@expo/vector-icons/build/Entypo';
import { useRouter } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';
import Box from '../Components/Box/Box';

export function BackButton() {
  const router = useRouter();
  const colors = useCurrentColorScheme();

  return (
    <Box onPress={router.back} hitSlop={40} style={styles.button}>
      {Platform.OS === 'ios' ? (
        <AntDesign name="closecircle" size={24} color={colors['button-general']} />
      ) : (
        <Entypo name="chevron-left" size={24} color={colors['button-general']} />
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginLeft: -10,
  },
});
