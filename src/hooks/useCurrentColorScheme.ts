import { useColorScheme } from '@/hooks/useColorScheme';
import { colors } from '@/styles/colors';

export default function useCurrentColorScheme() {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? colors.dark : colors.light;
}
