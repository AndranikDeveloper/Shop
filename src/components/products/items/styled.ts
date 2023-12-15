import styled from "styled-components";

export const ItemsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(100% / 4));
  justify-content: space-between;
  column-gap: 16px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;
export const ItemStyled = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ImageStyled = styled.img`
  /* height: 363px; */
  width: 100%;
`;
export const InfoStyled = styled.div``;
export const TextStyled = styled.div``;
export const PriceStyled = styled.div``;
