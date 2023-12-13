import styled from "styled-components";

export const ContentStyled = styled.div`
  width: 1400px;
  margin: 0 auto;
  margin-top: 70px;
`;
export const ContentBlockStyled = styled.div`
  background-color: #041c2c;
  height: 50px;
  width: 100%;
  position: relative;
`;
export const BlockTextStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 13px;
  color: white;
  line-height: 1.5;
  text-align: center;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
`;

export const VideoContentStyled = styled.div`
    margin-top: 10px;
    width: 100%;
`
export const VideoStyled = styled.video`
    height: 100%;
`
export const ImagesBlockStyled = styled.div`
    display: flex;
    height: 336px;
    margin-top: 4px;
`
export const CosmeticImageStyled = styled.img``
export const RightSideStyled = styled.div`
    background-color: #13302B;
    height: 100%;
    width: 100%;
    position: relative;
`
export const RightTextStyled = styled.div`
    color: #E5C287;
    font-size: 30px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    white-space: nowrap;
`
export const RightButtonStyled = styled.button`
    border: none;
    border-radius: 30px;
    background-color: white;
    padding: 15px 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: black;
        color: white;
    }
`

export const ImageFeatureStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
`
export const FeatureImageStyled = styled.img`
    height: 516px;
`
