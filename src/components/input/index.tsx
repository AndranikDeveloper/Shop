import React, { Dispatch, SetStateAction } from "react";
import { InputStyled } from "./styled";

interface IInputProps {
  value: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
  styles: React.CSSProperties;
  type: string;
}

export const Input: React.FC<IInputProps> = ({
  value,
  setValue,
  placeholder,
  styles,
  type,
}) => {
  return (
    <>
      <InputStyled $style={styles} value={value} placeholder={placeholder} />
    </>
  );
};
