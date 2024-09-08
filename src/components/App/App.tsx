import styled from "styled-components";
import Grid from "../Grid";
import KeyMetrics from "../KeyMetrics";
import RevenueDistributionChart from "../RevenueDistributionChart";
import StreamsTable from "../StreamsTable";
import TopStreamedSongsChart from "../TopStreamedSongsChart";
import UserGrowthChart from "../UserGrowthChart";

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr;

  > div:nth-child(2) {
    height: calc(100vh - 48px);
    overflow-y: scroll;
  }
`;

const StyledHeader = styled.div`
  background-color: #1f1f1f;
  display: grid;
  grid-template-columns: calc(24px + 12px + 12px) 1fr;
  align-items: center;
`;

const Logo = styled.div`
  margin: 12px;
  width: 24px;
  height: 24px;
  background-color: #82b1ff;
  border-radius: 24px;
`;

const LogoTitle = styled.h3`
  color: #82b1ff;
`;

function App() {
  return (
    <AppWrapper>
      <StyledHeader>
        <Logo />
        <LogoTitle>Streamify</LogoTitle>
      </StyledHeader>
      <Grid>
        <KeyMetrics />
        <UserGrowthChart />
        <RevenueDistributionChart />
        <TopStreamedSongsChart />
        <StreamsTable />
      </Grid>
    </AppWrapper>
  );
}

export default App;
