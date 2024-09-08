import {
  ActiveUsersQueryResult,
  Artist,
  DetailedRevenueQueryResult,
  Stream,
  TopArtistQueryResult,
  TopSongsQueryResult,
  TotalRevenueQueryResult,
  TotalStreamsQueryResult,
  TotalUsersQueryResult,
  UserMetricsPeriodQueryResult,
} from "../types";
import { random, uniqueId } from "lodash";

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

export const detailsStreamResultQuery: Stream[] = [
  {
    song: {
      name: "A Bar Song (Tipsy)",
      artist: { name: "Shaboozey" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Taste",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Please Please Please",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Espresso",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "I Had Some Help",
      artist: { name: "Post Malone Featuring Morgan Wallen" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Die With A Smile",
      artist: { name: "Lady Gaga & Bruno Mars" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Birds Of A Feather",
      artist: { name: "Billie Eilish" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Good Luck, Babe!",
      artist: { name: "Chappell Roan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Not Like Us",
      artist: { name: "Kendrick Lamar" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Lose Control",
      artist: { name: "Teddy Swims" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Million Dollar Baby",
      artist: { name: "Tommy Richman" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Too Sweet",
      artist: { name: "Hozier" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Beautiful Things",
      artist: { name: "Benson Boone" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Bed Chem",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Good Graces",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Ain't No Love In Oklahoma",
      artist: { name: "Luke Combs" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Cowgirls",
      artist: { name: "Morgan Wallen Featuring ERNEST" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Pink Skies",
      artist: { name: "Zach Bryan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Hot To Go!",
      artist: { name: "Chappell Roan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Miles On It",
      artist: { name: "Marshmello & Kane Brown" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Sharpest Tool",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Juno",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Lies Lies Lies",
      artist: { name: "Morgan Wallen" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Austin",
      artist: { name: "Dasha" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Pour Me A Drink",
      artist: { name: "Post Malone Featuring Blake Shelton" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Coincidence",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Slim Pickins",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Saturn",
      artist: { name: "SZA" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Like That",
      artist: { name: "Future, Metro Boomin & Kendrick Lamar" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Kehlani",
      artist: { name: "Jordan Adetunji" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "I Am Not Okay",
      artist: { name: "Jelly Roll" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Dumb & Poetic",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Pink Pony Club",
      artist: { name: "Chappell Roan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Big Dawgs",
      artist: { name: "Hanumankind X Kalmi" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Don't Smile",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Guy For That",
      artist: { name: "Post Malone Featuring Luke Combs" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Houdini",
      artist: { name: "Eminem" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Who",
      artist: { name: "Jimin" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "I Can Do It With A Broken Heart",
      artist: { name: "Taylor Swift" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Wanna Be",
      artist: { name: "GloRilla & Megan Thee Stallion" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Lie To Girls",
      artist: { name: "Sabrina Carpenter" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Si Antes Te Hubiera Conocido",
      artist: { name: "Karol G" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "28",
      artist: { name: "Zach Bryan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Guess",
      artist: { name: "Charli xcx Featuring Billie Eilish" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Slow It Down",
      artist: { name: "Benson Boone" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Stick Season",
      artist: { name: "Noah Kahan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "TGIF",
      artist: { name: "GloRilla" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "The Door",
      artist: { name: "Teddy Swims" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Stargazing",
      artist: { name: "Myles Smith" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Wildflower",
      artist: { name: "Billie Eilish" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "High Road",
      artist: { name: "Koe Wetzel & Jessie Murph" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Dirt Cheap",
      artist: { name: "Cody Johnson" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Red Wine Supernova",
      artist: { name: "Chappell Roan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "360",
      artist: { name: "Charli xcx" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Losers",
      artist: { name: "Post Malone Featuring Jelly Roll" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Mamushi",
      artist: { name: "Megan Thee Stallion Featuring Yuki Chiba" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "You Look Like You Love Me",
      artist: { name: "Ella Langley Featuring Riley Green" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Whiskey Whiskey",
      artist: { name: "Moneybagg Yo Featuring Morgan Wallen" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "One Of Wun",
      artist: { name: "Gunna" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Fortnight",
      artist: { name: "Taylor Swift Featuring Post Malone" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Beautiful As You",
      artist: { name: "Thomas Rhett" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Apple",
      artist: { name: "Charli xcx" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "It's Up",
      artist: { name: "Drake, Young Thug & 21 Savage" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Lonely Road",
      artist: { name: "mgk & Jelly Roll" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Gata Only",
      artist: { name: "FloyyMenor X Cris Mj" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Drugs You Should Try It",
      artist: { name: "Travis Scott" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Hang Tight Honey",
      artist: { name: "Lainey Wilson" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Nights Like This",
      artist: { name: "The Kid LAROI" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Help Me",
      artist: { name: "Real Boston Richey" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Chevrolet",
      artist: { name: "Dustin Lynch Featuring Jelly Roll" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "BAND4BAND",
      artist: { name: "Central Cee & Lil Baby" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Wrong Ones",
      artist: { name: "Post Malone Featuring Tim McGraw" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Lunch",
      artist: { name: "Billie Eilish" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "La Patrulla",
      artist: { name: "Peso Pluma & Neton Vega" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "I Love You, I'm Sorry",
      artist: { name: "Gracie Abrams" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Casual",
      artist: { name: "Chappell Roan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "The Boy Is Mine",
      artist: { name: "Ariana Grande" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Wind Up Missin' You",
      artist: { name: "Tucker Wetmore" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Nel",
      artist: { name: "Fuerza Regida" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Sailor Song",
      artist: { name: "Gigi Perez" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Think I'm In Love With You",
      artist: { name: "Chris Stapleton" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Si No Quieres No",
      artist: { name: "Luis R Conriquez x Neton Vega" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Love You, Miss You, Mean It",
      artist: { name: "Luke Bryan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Femininomenon",
      artist: { name: "Chappell Roan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Chihiro",
      artist: { name: "Billie Eilish" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Pretty Slowly",
      artist: { name: "Benson Boone" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Belong Together",
      artist: { name: "Mark Ambor" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Devil Is A Lie",
      artist: { name: "Tommy Richman" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "California Sober",
      artist: { name: "Post Malone Featuring Chris Stapleton" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Nasty",
      artist: { name: "Tinashe" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Nosedive",
      artist: { name: "Post Malone Featuring Lainey Wilson" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "What Don't Belong To Me",
      artist: { name: "Post Malone" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "U My Everything",
      artist: { name: "Sexyy Red & Drake" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Am I Okay?",
      artist: { name: "Megan Moroney" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "My Kink Is Karma",
      artist: { name: "Chappell Roan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Prove It",
      artist: { name: "21 Savage & Summer Walker" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "American Nights",
      artist: { name: "Zach Bryan" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "She's Somebody's Daughter (Reimagined)",
      artist: { name: "Drew Baldridge" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Close To You",
      artist: { name: "Gracie Abrams" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
  {
    song: {
      name: "Girls",
      artist: { name: "The Kid LAROI" },
    },
    count: random(1, 300),
    userId: uniqueId("user-"),
    date: new Date(`${random(1, 9)}/${random(1, 30)}/2024`),
  },
];

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
