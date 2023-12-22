import React from "react";
import styled from "styled-components";

interface IInputStyledProps {
  $style: React.CSSProperties;
}

export const InputStyled = styled.input<IInputStyledProps>`
  ${({ $style }) => $style}

  &:focus {
    ${({ $style }) => $style.borderColor}
  }
`;
