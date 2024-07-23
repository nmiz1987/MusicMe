import Screen from '@/elements/Components/Screen/Screen';
import Text from '@/elements/UI/Themed/Text';
import * as Network from 'expo-network';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

export default function Home() {
  const [ip, setIp] = useState<string | null>(null);
  const [state, setState] = useState<Network.NetworkState>();
  const [isInAirplaneMode, setIsInAirplaneMode] = useState<boolean | null>(null);

  useEffect(() => {
    async function loadNetwork() {
      const ip = await Network.getIpAddressAsync();
      setIp(ip);

      const st = await Network.getNetworkStateAsync();
      setState(st);

      if (Platform.OS === 'android') {
        const airplaneMode = await Network.isAirplaneModeEnabledAsync();
        setIsInAirplaneMode(airplaneMode);
      }
    }
    loadNetwork();
  }, []);

  return (
    <>
      <Screen>
        <Text>IP: {ip}</Text>
        <Text>state: {JSON.stringify(state, null, 2)}</Text>
        {Platform.OS === 'android' && <Text>Android only - Is in airplane mode: {isInAirplaneMode ? 'True' : 'False'}</Text>}
      </Screen>
    </>
  );
}
