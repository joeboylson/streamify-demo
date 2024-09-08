import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import GridItem from "../GridItem";
import { detailedRevenueQueryResult } from "../../constants";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CaretDown } from "@phosphor-icons/react";
import styled from "styled-components";
import Description from "../Description";
import { formatNumberToUSD } from "../../utils/number";
import { useMemo } from "react";

const ChartWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  gap: 72px;
  align-items: start;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 24px !important;
  }

  .recharts-responsive-container {
    background-color: ghostwhite;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
`;

export default function RevenueDistributionChart() {
  const revenueData = useMemo(
    () =>
      detailedRevenueQueryResult.map((i) => {
        return {
          key: i.revenueSource.name,
          value: i.revenueAmount,
        };
      }),
    []
  );

  const revenueDescriptionData = useMemo(
    () =>
      revenueData.map((i) => {
        return {
          key: `${i.key}:`,
          value: formatNumberToUSD(i.value),
        };
      }),
    [revenueData]
  );

  return (
    <GridItem sizeL={5} sizeM={3} minimal>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<CaretDown size={20} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Revenue Distribution (all time)
        </AccordionSummary>
        <AccordionDetails>
          <ChartWrapper>
            <ResponsiveContainer width={500} height={300}>
              <PieChart>
                <Pie
                  data={revenueData}
                  nameKey="key"
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={80}
                  label
                  fill="#82b1ff"
                />

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <Description data={revenueDescriptionData} />
          </ChartWrapper>
        </AccordionDetails>
      </Accordion>
    </GridItem>
  );
}
