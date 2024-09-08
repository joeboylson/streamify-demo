import { MetricsSnapshot } from "./metrics";

export type ActiveUsersQueryResult = MetricsSnapshot;
export type TotalUsersQueryResult = MetricsSnapshot;

/**
 * metrics over a period of time is simply an array of snapshots
 */
export type UserMetricsPeriodQueryResult = MetricsSnapshot[];
