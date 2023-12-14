import { useState } from "react";
import { Categories } from "../categories";
import { Introduction } from "../introduction";

import { MainContentStyled } from "./styled";

export const Main = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <MainContentStyled $isHover={isHover}>
      <Categories isHover={isHover} setIsHover={setIsHover} />
      <Introduction />
    </MainContentStyled>
  );
};
