import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import useCurrentColorScheme from '@/hooks/useCurrentColorScheme';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  const colors = useCurrentColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} style={Styles.tab} name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} style={Styles.tab} name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}

const Styles = StyleSheet.create({
  tab: {
    marginBottom: -3,
  },
});
