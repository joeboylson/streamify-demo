import { ReactNode } from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;
`;

const DescriptionKey = styled.b``;
const DescriptionValue = styled.p``;

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
          <>
            <DescriptionKey>{key}</DescriptionKey>
            <DescriptionValue>{value}</DescriptionValue>
          </>
        );
      })}
    </StyledDescription>
  );
}
