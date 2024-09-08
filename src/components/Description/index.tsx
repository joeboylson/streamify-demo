import { ReactNode } from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  align-items: center;
`;

const DescriptionRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  > div:nth-child(2) {
    background-color: red;
    flex: 1;
    margin: 0 12px;
    height: 0;
    border-top: 1px solid #ddd;
  }
`;

const DescriptionKey = styled.b`
  font-size: 20px;
`;

const DescriptionValue = styled.p`
  font-family: monospace;
  color: #888888;
`;

interface DescriptionItem {
  key: string;
  value: string | number | ReactNode;
}

interface _props {
  data: DescriptionItem[];
}

export default function Description({ data }: _props) {
  return (
    <StyledDescription>
      {data.map(({ key, value }) => {
        return (
          <DescriptionRow>
            <DescriptionKey>{key}</DescriptionKey>
            <div></div>
            <DescriptionValue>{value}</DescriptionValue>
          </DescriptionRow>
        );
      })}
    </StyledDescription>
  );
}
