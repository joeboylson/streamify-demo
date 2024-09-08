import styled from "styled-components";
import { WithChildren } from "../../types/component";

type _props = WithChildren & {
  sizeL: 5 | 4 | 3 | 2 | 1;
  sizeM: 3 | 2 | 1;
  minimal?: boolean;
};

export default function GridItem({ children, sizeL, sizeM, minimal }: _props) {
  const StyledGridItem = styled("div")`
    width: calc(100% - 24px);
    grid-column: span ${sizeL};
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    align-content: start;
    border: 1px solid #eee;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    @media (max-width: 800px) {
      grid-column: span ${sizeM};
    }

    @media (max-width: 600px) {
      grid-column: span 1;
    }

    ${minimal &&
    `
      width: 100%;
      padding: 0 !important;
      border-radius: 0px;
      box-shadow: none;
      `}
  `;

  return <StyledGridItem>{children}</StyledGridItem>;
}
