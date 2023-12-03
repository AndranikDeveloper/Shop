import styled from 'styled-components';
import { IMainStyledProps } from '../../types/main-types';

export const MainStyled = styled.div<IMainStyledProps>`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ $isHover }) =>
    $isHover ? 'rgba(0, 0, 0, 0.5)' : 'initial'};
`;
export const MainContainerStyles = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const MainAdvertisementStyled = styled.div<IMainStyledProps>`
  color: black;
  transition: top 0.7s ease-in-out;
  display: flex;
  /* transform: translate(-50%, -50%); */
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  /* margin-top: ${({ $changed }) => ($changed ? '60px' : '300px')};

  transform: ${({ $changed }) =>
    $changed ? 'translateY(-100px)' : 'translateY(0)'}; */

  backface-visibility: hidden;
  perspective: 1000px;
`;
