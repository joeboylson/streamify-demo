import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import GridItem from "../GridItem";
import { topSongsQueryResult } from "../../constants";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CaretDown } from "@phosphor-icons/react";

export default function TopStreamedSongsChart() {
  const topSongs = topSongsQueryResult.map(({ name, artist, value }) => {
    return {
      name: `${name} by ${artist.name}`,
      value,
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
          Top Songs (last 30 days)
        </AccordionSummary>
        <AccordionDetails>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <BarChart width={800} height={250} data={topSongs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82b1ff" />
            </BarChart>
          </ResponsiveContainer>
        </AccordionDetails>
      </Accordion>
    </GridItem>
  );
}
