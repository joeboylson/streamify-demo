import Grid from "../Grid";
import KeyMetrics from "../KeyMetrics";
import RevenueDistributionChart from "../RevenueDistributionChart";
import StreamsTable from "../StreamsTable";
import TopStreamedSongsChart from "../TopStreamedSongsChart";
import UserGrowthChart from "../UserGrowthChart";

function App() {
  return (
    <div>
      <Grid>
        <KeyMetrics />
        <UserGrowthChart />
        <RevenueDistributionChart />
        <TopStreamedSongsChart />
        <StreamsTable />
      </Grid>
    </div>
  );
}

export default App;
