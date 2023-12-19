import styled, { css } from "styled-components";

interface IKindStyledProps {
  $isEqual: boolean;
}

export const ProductKindStyled = styled.div``;
export const KindsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const KindStyled = styled.div<IKindStyledProps>`
  border: 1px solid grey;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border-bottom: 2px solid black;
  user-select: none;

  ${({ $isEqual }) =>
    $isEqual &&
    css`
      border-bottom: transparent;
      border-left: 2px solid black;
      border-right: 2px solid black;
      border-top: 4px solid #007a7a;
    `}
`;
