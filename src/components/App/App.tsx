import styled from "styled-components";
import Grid from "../Grid";
import KeyMetrics from "../KeyMetrics";
import RevenueDistributionChart from "../RevenueDistributionChart";
import StreamsTable from "../StreamsTable";
import TopStreamedSongsChart from "../TopStreamedSongsChart";
import UserGrowthChart from "../UserGrowthChart";
import { GithubLogo } from "@phosphor-icons/react";

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 48px calc(100vh - 48px - 48px) 48px;
  width: 100%;

  > div:nth-child(2) {
    overflow-y: scroll;
  }
`;

const Header = styled.header`
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

const Footer = styled.footer`
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  padding: 0 24px;
  align-items: center;

  svg {
    margin-right: 12px;
  }

  * {
    font-size: 12px;
    color: white;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header>
        <Logo />
        <LogoTitle>Streamify</LogoTitle>
      </Header>
      <Grid>
        <KeyMetrics />
        <UserGrowthChart />
        <RevenueDistributionChart />
        <TopStreamedSongsChart />
        <StreamsTable />
      </Grid>
      <Footer>
        <a href="https://github.com/joeboylson/streamify-demo" target="_blank">
          <GithubLogo size={20} color="#ffffff" weight="duotone" />
        </a>
        <p>
          (created by&nbsp;
          <a href="https://joeboylson.tech" target="_blank">
            Joe Boylson
          </a>
          &nbsp;as a demo project)
        </p>
      </Footer>
    </AppWrapper>
  );
}

export default App;
