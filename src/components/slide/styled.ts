import styled, { keyframes } from "styled-components";

const slide = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
`;

export const SlideContentStyled = styled.div`
  margin-top: 30px;
  overflow: hidden;
  white-space: nowrap;
`;
export const SlideStyled = styled.div`
  align-items: center;
  animation: 8s ${slide} infinite alternate-reverse;
`;
export const SlideIconStyled = styled.img`
  height: 90px;
  margin: 0px 40px;
  cursor: pointer;
`;
