import styled from "styled-components";

export const SignInStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px;
`;
export const SignInBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const SignInTitleStyled = styled.h3`
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`;
export const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: #1877f2;
  }
`;

export const SignButtonStyled = styled.button`
  border: none;
  background-color: #1877f2;
  cursor: pointer;
  padding: 15px;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: gray;
  }
`;

export const SignUpLinkStyled = styled.a`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 13px;
  display: flex;
  justify-content: center;
  color: #1877f2;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
