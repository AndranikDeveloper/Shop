import styled, { keyframes } from "styled-components";
import { IMainStyledProps } from "../../types/main-types";

export const MainStyled = styled.div<IMainStyledProps>`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ $isHover }) =>
    $isHover ? "rgba(0, 0, 0, 0.5)" : "initial"};
`;
export const MainContainerStyles = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const animation = keyframes`
  from {
  transform: rotateX(-90deg);
  }
  to {
    transform: rotateX(90deg);
  }
`;

export const MainAdvertisementStyled = styled.div<IMainStyledProps>`
  color: black;
  display: flex;
  animation: ${animation} ${({ $timeout }) => $timeout}ms infinite;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-top: 70px;
`;
