import { FavoritesProps, LinksProps } from '@/constants/interfaces';
import { makeAutoObservable, runInAction } from 'mobx';

class AppStore {
  private _links: LinksProps[] = [];
  private _favorites: FavoritesProps[] = [];
  private _nowPlaying: LinksProps | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get nowPlaying() {
    return this._nowPlaying;
  }

  setNowPlaying(station: LinksProps) {
    if (!station) return;
    runInAction(async () => {
      this._nowPlaying = station;
    });
  }

  get links() {
    return this._links;
  }

  get favorites() {
    return this._favorites;
  }

  setLinks(links: LinksProps[]) {
    if (!links) return;
    runInAction(() => {
      this._links = links;
    });
  }

  setFavorites(favorites: FavoritesProps[]) {
    if (!favorites) return;
    runInAction(() => {
      this._favorites = favorites;
    });
  }
}
export default new AppStore();
