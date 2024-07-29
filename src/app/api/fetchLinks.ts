import applicationStore from '@/storage/application-store';
import db from '@/storage/db';

export async function fetchLinks() {
  console.log('start fetching');
  applicationStore.setLinks(db);
}
