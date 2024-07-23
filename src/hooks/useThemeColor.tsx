import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor<L, D>(props: { light: L; dark: D }) {
  const theme = useColorScheme() ?? 'light';
  return props[theme];
}
