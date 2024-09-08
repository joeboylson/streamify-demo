import { MetricsSnapshot } from "./metrics";
import { Song } from "./song";

export type TotalStreamsQueryResult = MetricsSnapshot;

export type Stream = {
  song: Song;
  count: number;
  userId: string;
  date: Date;
};
