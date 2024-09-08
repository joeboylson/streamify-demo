import { Artist } from "./artist";

export type Song = {
  name: string;
  artist: Artist;
};

export type TopSongsQueryResult = Song[];
