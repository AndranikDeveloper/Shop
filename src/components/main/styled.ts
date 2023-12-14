import styled from "styled-components";

interface BlockProps {
  $isHover: boolean;
}
export const MainContentStyled = styled.div<BlockProps>`
  position: relative;
  background-color: ${({ $isHover }) => $isHover && "rgba(0,0,0,0.8)"};
`;
