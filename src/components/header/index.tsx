import { useState } from "react";
import {
  HeaderContainerStyled,
  HeaderContentLeftStyled,
  HeaderContentRightStyled,
  HeaderContentStyled,
  HeaderStyled,
  LeftInputStyled,
  LeftTitleStyled,
  RightBagIconStyled,
  RightTitleStyled,
  RightUserIconStyled,
} from "./styled";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <HeaderContainerStyled>
        <HeaderContentStyled>
          <HeaderContentLeftStyled>
            <LeftTitleStyled onClick={() => navigate("/")}>
              Next
            </LeftTitleStyled>
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
    </HeaderStyled>
  );
};
