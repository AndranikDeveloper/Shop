import React from 'react';
import styled from 'styled-components';

interface IInputStyledProps {
  $style: React.CSSProperties;
}

export const InputStyled = styled.input<IInputStyledProps>`
  ${({ $style }) => {
    const { borderColor, ...restStyles } = $style || {};
    return restStyles;
  }}

  &:focus {
    ${({ $style }) => ($style ? { borderColor: $style.borderColor } : '')}
  }
`;
