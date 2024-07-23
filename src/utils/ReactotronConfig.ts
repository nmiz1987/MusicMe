import { queryClient } from '@/services/network/queryClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron, { networking, openInEditor, overlay } from 'reactotron-react-native';
import { QueryClientManager, reactotronReactQuery } from 'reactotron-react-query';

const queryClientManager = new QueryClientManager({
  // @ts-ignore
  queryClient,
});

Reactotron.use(reactotronReactQuery(queryClientManager))
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'App',
    onDisconnect: () => queryClientManager.unsubscribe(),
  }) // controls connection & communication settings
  .use(networking())
  .use(openInEditor())
  .use(overlay())

  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

export { Reactotron };
