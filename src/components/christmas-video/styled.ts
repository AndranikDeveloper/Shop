import styled from "styled-components";

export const ChristmasVideoStyled = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
`;
export const VideoStyled = styled.video`
  width: 100%;
`;
export const VideoTextStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 20px;
`;
export const VideoTitleStyled = styled.div`
  text-transform: uppercase;
  color: #c8ad7c;
  font-size: 40px;
`;
export const VideoSubTitleStyled = styled.div`
  color: #c8ad7c;
  margin-top: 10px;
`;
export const VideoButtonStyled = styled.button`
  position: absolute;
  border: none;
  background-color: #c8ad7c;
  padding: 10px 20px;
  color: white;
  right: 10px;
  top: 56%;
  border-radius: 20px;
  transform: translateY(-50%);
  transition: all 0.7s ease;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
