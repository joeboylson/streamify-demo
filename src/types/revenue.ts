import { MetricsSnapshot } from "./metrics";

export type TotalRevenueQueryResult = MetricsSnapshot;

export type RevenueSource = {
  name: string;
};

export type DetailedRevenueQueryResult = {
  revenueSource: RevenueSource;
  revenueAmount: number;
};
