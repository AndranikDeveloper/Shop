import styled from "styled-components";
import { IoMdStar } from "react-icons/io";

export const ProductStyled = styled.div``;
export const ProductBarStyled = styled.div`
  margin-top: 30px;
`;
export const InfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

// ----LEFT-SIDE-----------------------------------------------------------------
export const InfoLeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const InfoTitleStyled = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const InfoRatingStyled = styled.div`
  font-size: 19px;
  font-weight: 600;
`;
export const RatingStarsStyled = styled(IoMdStar)``;
export const RateInputStyled = styled.input`
  display: none;
`;
// ---RIGHT-SIDE------------------------------------------------------------------------------------
export const InfoRightStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  row-gap: 20px;
`;

export const InfoPriceStyled = styled.div`
  font-size: 20px;
  font-weight: 900;
`;
export const InfoCountStyled = styled.div`
  font-size: 19px;
  font-weight: 700;
`;

// ---UNDERLINE-----------------------------------------------------------

export const UnderLineStyled = styled.div`
  height: 1px;
  background-color: gray;
  width: 100%;
`;
