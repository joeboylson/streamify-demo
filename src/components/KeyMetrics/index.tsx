import {
  activeUsersQueryResult,
  topArtistQueryResult,
  totalRevenueQueryResult,
  totalStreamsQueryResult,
  totalUsersQueryResult,
} from "../../constants";
import { formatNumberToUSD, formatNumberWithCommas } from "../../utils/number";
import Description from "../Description";
import GridItem from "../GridItem";

export default function KeyMetrics() {
  const usersDescriptionData = [
    {
      key: "Total Users:",
      value: formatNumberWithCommas(totalUsersQueryResult.value),
    },
    {
      key: "Active Users:",
      value: formatNumberWithCommas(activeUsersQueryResult.value),
    },
  ];

  const topArtistDescriptionData = [
    {
      key: "Top Artist Last Month:",
      value: topArtistQueryResult.artist.name,
    },
  ];

  const totalSteamsDescriptionData = [
    {
      key: "Total Streams:",
      value: formatNumberWithCommas(totalStreamsQueryResult.value),
    },
  ];

  const totalRevenueDescriptionData = [
    {
      key: "Total Revenue:",
      value: formatNumberToUSD(totalRevenueQueryResult.value),
    },
  ];

  return (
    <>
      <GridItem sizeL={2} sizeM={3}>
        <Description data={topArtistDescriptionData} />
      </GridItem>

      <GridItem sizeL={1} sizeM={1}>
        <Description data={usersDescriptionData} />
      </GridItem>

      <GridItem sizeL={1} sizeM={1}>
        <Description data={totalSteamsDescriptionData} />
      </GridItem>

      <GridItem sizeL={1} sizeM={1}>
        <Description data={totalRevenueDescriptionData} />
      </GridItem>
    </>
  );
}
