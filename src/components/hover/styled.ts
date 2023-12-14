import styled from "styled-components";

export const HoverContainerStyled = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: white;
  overflow-y: auto;
  z-index: 1000;
  display: flex;
  align-items: center;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;
  min-height: 300px;
`;
export const HoverContentStyled = styled.div``;
export const CategoryContentStyled = styled.div`
  color: black;
  display: flex;
  margin-top: 10px;
`;
export const CategoryPreloaderStyled = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CategoryTitleStyled = styled.div``;
export const CategoryDescriptionStyled = styled.div``;
