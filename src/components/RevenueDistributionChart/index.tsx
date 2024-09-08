import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import GridItem from "../GridItem";
import { detailedRevenueQueryResult } from "../../constants";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CaretDown } from "@phosphor-icons/react";
import styled from "styled-components";
import Description from "../Description";

const ChartWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  gap: 12px;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default function RevenueDistributionChart() {
  const revenueData = detailedRevenueQueryResult.map((i) => {
    return {
      key: i.revenueSource.name,
      value: i.revenueAmount,
    };
  });

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
                />

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <Description data={revenueData} />
          </ChartWrapper>
        </AccordionDetails>
      </Accordion>
    </GridItem>
  );
}
