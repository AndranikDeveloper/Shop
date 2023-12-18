import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

interface SwiperStyledProps {
  $moveSize: number;
}

export const ProductStyled = styled.div``;
export const ProductContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const ProductContentStyled = styled.div``;
export const SwiperBarStyled = styled.div``;
export const SwiperStyled = styled.div`
  height: 280px;
  overflow: hidden;
`;
export const SwiperBlockStyled = styled.div<SwiperStyledProps>`
  transition: all 0.3s ease;
  transform: translateY(${({ $moveSize }) => `${$moveSize}px`});
  width: 50px;
  height: 70px;
`;
export const SwiperImageStyled = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const ButtonWrapperStyled = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
`;
export const UpIconStyled = styled(IoIosArrowUp)`
  width: 20px;
  height: 25px;
  cursor: pointer;
  margin-left: 15px;
`;
export const DownIconStyled = styled(IoIosArrowDown)`
  width: 20px;
  height: 25px;
  cursor: pointer;
  margin-left: 15px;
  margin-top: 10px;
`;
