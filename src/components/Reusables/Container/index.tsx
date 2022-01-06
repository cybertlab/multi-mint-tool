import { StyledContainer } from "./styles";

export default function Container(props: any) {
  return (
    <StyledContainer width={props.width}>{props.children}</StyledContainer>
  );
}
