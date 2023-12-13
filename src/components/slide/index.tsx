import React, { useState } from "react";
import { slideData } from "../../utils/slide-services";
import { SlideContentStyled, SlideStyled } from "./styled";

export const Slide = () => {
  const [isHover, setIsHover] = useState(false);
  console.log(isHover);

  return (
    <SlideContentStyled>
      <SlideStyled>
        {slideData.map((icon, idx) => (
          <span
            key={idx}
            onMouseEnter={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            {icon.brandIcon}
          </span>
        ))}
      </SlideStyled>
    </SlideContentStyled>
  );
};
