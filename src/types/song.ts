import { Artist } from "./artist";

export type Song = {
  name: string;
  artist: Artist;
};

export type TopSongResult = Song & {
  value: number;
};

export type TopSongsQueryResult = TopSongResult[];
