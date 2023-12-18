import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { IProductsIconStyledProps } from '../../types/products-type';

export const ProductsStyled = styled.div`
  margin-top: 30px;
`;
export const ProductsContainerStyled = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
export const ProductsContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductsLeftSideStyled = styled.div``;
export const LeftTextStyled = styled.div`
  text-transform: uppercase;
`;

// --------------------------------------------------------

export const ProductsRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ButtonBlockStyled = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;
export const RightTextStyled = styled.div``;
export const RightSortButtonStyled = styled.div`
  border: 1px solid gray;
  border-radius: 20px;
  display: flex;
  width: 200px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  position: relative;
`;
export const SortButtonTextStyled = styled.span`
  color: gray;
`;
export const SortDetailsStyled = styled.div``;
export const SortIconStyled = styled(IoIosArrowDown)<IProductsIconStyledProps>`
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen && 'rotate(-180deg)'};
  color: ${({ $isOpen }) => $isOpen && 'rgb(105, 137, 0)'};
`;
export const SortItemsStyled = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 10px 0 10px 0;
  margin-top: 10px;
  margin-left: 55px;
  position: absolute;
  z-index: 100;
  top: 90px;
`;
export const ItemStyled = styled.div`
  width: 100%;
  display: block;
  font-size: 20px;
  cursor: pointer;
  padding: 0 30px;

  &:hover {
    background-color: rgb(81, 81, 81);
    color: white;
    height: 100%;
  }
`;
