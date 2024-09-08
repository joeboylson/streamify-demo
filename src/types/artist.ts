export type Artist = {
  name: string;
};

export type TopArtistQueryResult = {
  fromDate: Date;
  toDate: Date;
  artist: Artist;
};
