import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
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
import { CaretDown } from "@phosphor-icons/react";
import { useMemo } from "react";

export default function KeyMetrics() {
  const topArtistDescriptionData = useMemo(
    () => [
      {
        key: "Top Artist Last Month:",
        value: topArtistQueryResult.artist.name,
      },
      {
        key: "Total Streams:",
        value: formatNumberWithCommas(totalStreamsQueryResult.value),
      },
      {
        key: "Total Users:",
        value: formatNumberWithCommas(totalUsersQueryResult.value),
      },
      {
        key: "Active Users:",
        value: formatNumberWithCommas(activeUsersQueryResult.value),
      },
      {
        key: "Total Revenue:",
        value: formatNumberToUSD(totalRevenueQueryResult.value),
      },
    ],
    []
  );

  return (
    <GridItem sizeL={5} sizeM={3} minimal>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<CaretDown size={20} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Key Metrics
        </AccordionSummary>
        <AccordionDetails>
          <Description data={topArtistDescriptionData} />
        </AccordionDetails>
      </Accordion>
    </GridItem>
  );
}
