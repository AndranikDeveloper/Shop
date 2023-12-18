import styled from "styled-components";

export const ItemsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(100% / 4));
  column-gap: 16px;
  flex-direction: row;
  flex-wrap: nowrap;
  row-gap: 10px;
  margin-top: 50px;
`;
export const ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const ImageStyled = styled.img`
  width: 100%;
  height: 360px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const InfoStyled = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 10px;
  align-items: center;
`;
export const TextStyled = styled.div`
  overflow: hidden;
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const PriceStyled = styled.div`
  font-weight: 800;
  font-size: 20px;
`;
