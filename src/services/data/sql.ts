import { LinksProps } from '@/constants/interfaces';
import applicationStore from '@/storage/application-store';
import { SQLiteDatabase } from 'expo-sqlite';
import networkService, { isOk } from '@/services/network/networkService';

export const clearDb = async (db: SQLiteDatabase) => {
  await db.execAsync('DELETE FROM links;');
  // await db.execAsync('DELETE FROM favorites;');
  setTimeout(() => {
    init(db);
    console.log('DB Cleared');
  }, 5000);
};

export const init = async (db: SQLiteDatabase) => {
  const results = await db.getAllAsync<LinksProps>('SELECT * FROM links ORDER BY votes DESC;');

  if (results.length > 0) {
    applicationStore.setLinks(results);
    return;
  }
  const links = await fetchLinks();
  applicationStore.setLinks(links);
};

const fetchLinks = async () => {
  const res = await networkService.get(
    'https://de1.api.radio-browser.info/json/stations/search?hidebroken=true&order=clickcount&reverse=true&limit=1500',
  );
  if (isOk(res.status)) {
    return res.data as LinksProps[];
  }
  console.error('Failed to fetch links');
  return [];
};
