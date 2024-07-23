import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <SafeAreaView style={[Styles.container]}>{children}</SafeAreaView>;
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
