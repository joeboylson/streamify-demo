import styled from "styled-components";
import { WithChildren } from "../../types/component";

type _props = WithChildren & {
  sizeL: 5 | 4 | 3 | 2 | 1;
  sizeM: 3 | 2 | 1;
};

export default function GridItem({ children, sizeL, sizeM }: _props) {
  const StyledGridItem = styled("div")`
    width: 100%;
    grid-column: span ${sizeL};
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    align-content: start;
    border: 1px solid #eee;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

    @media (max-width: 800px) {
      grid-column: span ${sizeM};
    }

    @media (max-width: 600px) {
      grid-column: span 1;
    }
  `;

  return <StyledGridItem>{children}</StyledGridItem>;
}
