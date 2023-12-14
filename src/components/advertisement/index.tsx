import {
  MainAdvertisementStyled,
  MainContainerStyles,
  MainStyled,
} from "./styled";
import { IMainProps } from "../../types/main-types";
import { useEffect, useState } from "react";
import { advertisementData } from "../../utils/main-services";

export const Advertisement = ({ isHover }: IMainProps) => {
  const [data, setData] = useState<any>(advertisementData.first);
  const timeout = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      const keys = Object.keys(advertisementData);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];

      setData(advertisementData[randomKey]);
    }, timeout);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <MainStyled $isHover={isHover}>
      <MainContainerStyles>
        <MainAdvertisementStyled $timeout={timeout}>
          {data}
        </MainAdvertisementStyled>
      </MainContainerStyles>
    </MainStyled>
  );
};
