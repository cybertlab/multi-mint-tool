import styled from "styled-components";

interface Props {
  width?: Number;
}

export const StyledContainer = styled.div<Props>`
  width: 100%;
  max-width: ${(props) => (props.width ? `${props.width}px` : "1249px")};
  margin: 0 auto;
  padding: 0 15px;
`;
