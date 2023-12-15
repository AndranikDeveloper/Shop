import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { PiUserThin } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export const HeaderStyled = styled.div`
  position: relative;
`;

export const HeaderContainerStyled = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
export const HeaderContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

// ------------LEFT-SIDE------------------------------------------------
export const HeaderContentLeftStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
export const LeftTitleStyled = styled.span`
  color: #b78b20;
  font-size: 40px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  cursor: pointer;
`;
export const LeftInputStyled = styled.input`
  width: 400px;
  border-radius: 10px;
  border: 1px solid gray;
  height: 15px;
  font-size: 14px;
  padding: 13px;
  position: relative;
`;

export const InputIconStyled = styled(IoSearch)`
  position: absolute;
  left: 850px;
  z-index: 2;
`;
// -----------RIGHT-SIDE-------------------------------------------------------
export const HeaderContentRightStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const RightTitleStyled = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const RightUserIconStyled = styled(PiUserThin)`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

export const RightBagIconStyled = styled(HiOutlineShoppingBag)`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
