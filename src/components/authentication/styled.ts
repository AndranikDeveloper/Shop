import styled from "styled-components";

export const AuthStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 100vh;
`;

// ------LEFT-SIDE-------------------------------------------------------------------
export const AuthLeftStyled = styled.div`
  background-color: black;
  height: 100%;
  position: relative;
`;
export const LeftTextStyled = styled.div`
  color: #b78b20;
  text-transform: uppercase;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
`;
// ------RIGHT-SIDE-----------------------------------------------------------------------------------
export const AuthRightStyled = styled.div`
  position: relative;
`;
export const AuthBlockStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  height: 100px;
  width: 100px;
`;
