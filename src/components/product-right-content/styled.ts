import styled from "styled-components";
import { IoMdStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

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

// -----BOTTOM-SIDE---------------------------------------------------------------------------------------------------------------

export const InfoBottomStyled = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const BottomTextStyled = styled.div`
  font-size: 16px;
  display: flex;
`;

// ------LIKES-BLOCK--------------------------------------------------------------------------

export const FavoritesStyled = styled.div`
  display: flex;
  margin-top: 50px;
`;
export const FavoritesBlockStyled = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
export const FavoritesTextStyled = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const FavoritesIconStyled = styled(FaRegHeart)`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
// ---UNDERLINE-----------------------------------------------------------

export const UnderLineStyled = styled.div`
  height: 1px;
  background-color: gray;
  width: 100%;
`;
