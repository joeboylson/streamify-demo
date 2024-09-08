import {
  ActiveUsersQueryResult,
  Artist,
  DetailedRevenueQueryResult,
  TopArtistQueryResult,
  TopSongsQueryResult,
  TotalRevenueQueryResult,
  TotalStreamsQueryResult,
  TotalUsersQueryResult,
  UserMetricsPeriodQueryResult,
} from "../types";
import { random } from "lodash";

/**
 * Helpers
 */

const today = new Date();
const thirtyDaysAgo = new Date(new Date().setDate(today.getDate() - 30));
const decemberFirst1969 = new Date(0);

/**
 * Artists
 */

export const billieEilish: Artist = {
  name: "Billie Eilish",
};

export const theWeeknd: Artist = {
  name: "The Weeknd",
};

export const brunoMars: Artist = {
  name: "Bruno Mars",
};

export const taylorSwift: Artist = {
  name: "Taylor Swift",
};

export const coldplay: Artist = {
  name: "Coldplay",
};

export const edSheeran: Artist = {
  name: "Ed Sheeran",
};

export const sabrinaCarpenter: Artist = {
  name: "Sabrina Carpenter",
};

export const hozier: Artist = {
  name: "Hozier",
};

export const topArtistQueryResult: TopArtistQueryResult = {
  fromDate: thirtyDaysAgo,
  toDate: today,
  artist: billieEilish,
};

/**
 * Revenue
 */

export const totalRevenueQueryResult: TotalRevenueQueryResult = {
  fromDate: decemberFirst1969,
  toDate: today,
  value: random(20000, 10000),
};

export const detailedRevenueQueryResult: DetailedRevenueQueryResult = [
  {
    revenueSource: {
      name: "Advertisements",
    },
    revenueAmount: Math.round(totalRevenueQueryResult.value * 0.2),
  },
  {
    revenueSource: {
      name: "Subscriptions",
    },
    revenueAmount: Math.round(totalRevenueQueryResult.value * 0.4),
  },
  {
    revenueSource: {
      name: "Royalties",
    },
    revenueAmount: Math.round(totalRevenueQueryResult.value * 0.35),
  },
  {
    revenueSource: {
      name: "Other",
    },
    revenueAmount: Math.round(totalRevenueQueryResult.value * 0.05),
  },
];

/**
 * Streams
 */

export const totalStreamsQueryResult: TotalStreamsQueryResult = {
  fromDate: decemberFirst1969,
  toDate: today,
  value: random(80000, 1000000),
};

/**
 * Songs
 */

export const topSongsQueryResult: TopSongsQueryResult = [
  {
    name: "Birds of a Feather",
    artist: billieEilish,
    value: Math.round(totalStreamsQueryResult.value * 0.01),
  },
  {
    name: "Taste",
    artist: sabrinaCarpenter,
    value: Math.round(totalStreamsQueryResult.value * 0.009),
  },
  {
    name: "I Can Do It With a Broken Heart",
    artist: sabrinaCarpenter,
    value: Math.round(totalStreamsQueryResult.value * 0.007),
  },
  {
    name: "Too Sweet",
    artist: sabrinaCarpenter,
    value: Math.round(totalStreamsQueryResult.value * 0.0065),
  },
  {
    name: "Lunch",
    artist: billieEilish,
    value: Math.round(totalStreamsQueryResult.value * 0.004),
  },
];

/**
 * Users
 */

export const totalUsersQueryResult: TotalUsersQueryResult = {
  fromDate: decemberFirst1969,
  toDate: today,
  value: random(2000, 10000),
};

export const activeUsersQueryResult: ActiveUsersQueryResult = {
  ...totalUsersQueryResult,
  value: Math.round(totalUsersQueryResult.value * 0.2), // 20% of users are active
};

export const userMetricsPeriodQueryResult: UserMetricsPeriodQueryResult = [
  {
    fromDate: new Date("09/01/2023"),
    toDate: new Date("09/30/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.1),
  },
  {
    fromDate: new Date("10/01/2023"),
    toDate: new Date("10/31/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.14),
  },
  {
    fromDate: new Date("11/01/2023"),
    toDate: new Date("11/30/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.21),
  },
  {
    fromDate: new Date("12/01/2023"),
    toDate: new Date("12/31/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.27),
  },
  {
    fromDate: new Date("1/01/2023"),
    toDate: new Date("1/31/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.4),
  },
  {
    fromDate: new Date("1/01/2023"),
    toDate: new Date("1/31/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.45),
  },
  {
    fromDate: new Date("2/01/2023"),
    toDate: new Date("2/29/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.51),
  },
  {
    fromDate: new Date("3/01/2023"),
    toDate: new Date("3/31/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.6),
  },
  {
    fromDate: new Date("4/01/2023"),
    toDate: new Date("4/30/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.63),
  },
  {
    fromDate: new Date("5/01/2023"),
    toDate: new Date("5/31/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.67),
  },
  {
    fromDate: new Date("6/01/2023"),
    toDate: new Date("6/30/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.71),
  },
  {
    fromDate: new Date("7/01/2023"),
    toDate: new Date("7/31/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.79),
  },
  {
    fromDate: new Date("8/01/2023"),
    toDate: new Date("8/31/2023"),
    value: Math.round(totalUsersQueryResult.value * 0.89),
  },
  {
    fromDate: new Date("9/01/2023"),
    toDate: new Date("9/30/2023"),
    value: Math.round(totalUsersQueryResult.value),
  },
];
