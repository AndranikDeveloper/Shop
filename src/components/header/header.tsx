import { useState } from "react";
import {
  HeaderContainerStyled,
  HeaderContentLeftStyled,
  HeaderContentRightStyled,
  HeaderContentStyled,
  LeftInputStyled,
  LeftTitleStyled,
  RightBagIconStyled,
  RightTitleStyled,
  RightUserIconStyled,
} from "./styled";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <HeaderContainerStyled>
      <HeaderContentStyled>
        <HeaderContentLeftStyled>
          <LeftTitleStyled>Next</LeftTitleStyled>
          <LeftInputStyled
            placeholder="Search Clothes"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </HeaderContentLeftStyled>
        <HeaderContentRightStyled>
          <RightTitleStyled>My Account</RightTitleStyled>
          <RightUserIconStyled />
          <RightBagIconStyled />
        </HeaderContentRightStyled>
      </HeaderContentStyled>
    </HeaderContainerStyled>
  );
};
