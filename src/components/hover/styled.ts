import styled from 'styled-components';

export const HoverContainerStyled = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: gray;
  overflow-y: auto;
  z-index: 1000;
  display: flex;
  align-items: center;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 20px;
`;
export const HoverContentStyled = styled.div``;
export const CategoryContentStyled = styled.div`
  color: white;
  display: flex;
  margin-top: 10px;
`;

export const CategoryTitleStyled = styled.div``;
export const CategoryDescriptionStyled = styled.div``;
