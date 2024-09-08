import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import GridItem from "../GridItem";
import { userMetricsPeriodQueryResult } from "../../constants";
import { MetricsSnapshot } from "../../types";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CaretDown } from "@phosphor-icons/react";

export default function UserGrowthChart() {
  return (
    <GridItem sizeL={5} sizeM={3} minimal>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<CaretDown size={20} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          User Growth (last 12 months)
        </AccordionSummary>
        <AccordionDetails>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart
              data={userMetricsPeriodQueryResult}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey={(i: MetricsSnapshot) => i.toDate.toLocaleDateString()}
              />
              <YAxis dataKey={(i: MetricsSnapshot) => i.value} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#82b1ff"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </AccordionDetails>
      </Accordion>
    </GridItem>
  );
}
