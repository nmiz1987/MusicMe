import networkService, { isOk } from '@/services/network/networkService';
import applicationStore from '@/storage/application-store';

export async function fetchLinks() {
  console.log('start fetching');
  const res = await networkService.get(
    'https://de1.api.radio-browser.info/json/stations/search?hidebroken=true&order=clickcount&reverse=true&limit=1000',
  );
  if (isOk(res.status)) {
    console.log('fetched');
    applicationStore.setLinks(res.data);
  }
}
