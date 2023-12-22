import React from "react";
import {
  BackgroundStyled,
  CloseIconStyled,
  SignUpModalStyled,
  SignUpStyled,
} from "./styled";

interface ISignUpProps {
  setIsModal: (val: boolean) => void;
}

export const SignUp: React.FC<ISignUpProps> = ({ setIsModal }) => {
  return (
    <SignUpStyled>
      <BackgroundStyled onClick={() => setIsModal(false)}></BackgroundStyled>
      <SignUpModalStyled>
        <CloseIconStyled onClick={() => setIsModal(false)} />
      </SignUpModalStyled>
    </SignUpStyled>
  );
};
