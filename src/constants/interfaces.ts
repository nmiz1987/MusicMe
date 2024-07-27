export interface LinksProps {
  stationuuid: string;
  name: string;
  url: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  tags: string;
  country: string;
  countrycode: string;
  state: string;
  language: string;
  languagecodes: string;
  votes: number;
  lastchangetime: string;
  codec: string;
  bitrate: number;
  hls: number;
}

export interface FavoritesProps {
  stationuuid: string;
}

// 'INSERT INTO links (stationuuid, name, url, url_resolved, homepage, favicon, tags, country, countrycode, state, language, languagecodes, votes, lastchangetime, codec, bitrate, hls) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'`
// CREATE TABLE IF NOT EXISTS links (stationuuid TEXT PRIMARY KEY,name TEXT,url TEXT,url_resolved TEXT,homepage TEXT,favicon TEXT,tags TEXT,country TEXT,countrycode TEXT,state TEXT,language TEXT,languagecodes TEXT,votes INTEGER,lastchangetime TEXT,codec TEXT,bitrate INTEGER,hls INTEGER);``

// CREATE TABLE IF NOT EXISTS favorites (stationuuid TEXT PRIMARY KEY,FOREIGN KEY (stationuuid) REFERENCES links(stationuuid));
