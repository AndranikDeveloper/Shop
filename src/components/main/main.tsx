import {
  MainAdvertisementStyled,
  MainContainerStyles,
  MainStyled,
} from './styled';
import { IMainProps } from '../../types/main-types';
import { useEffect, useState } from 'react';
import { advertisementData } from '../../utils/main-services';

export const Main = ({ isHover }: IMainProps) => {
  const [data, setData] = useState<any>(advertisementData.first);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    setChanged(true);
    const interval = setInterval(() => {
      const keys = Object.keys(advertisementData);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];

      setData(advertisementData[randomKey]);
      setChanged(false);
    }, 4000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <MainStyled $isHover={isHover}>
      <MainContainerStyles>
        <MainAdvertisementStyled $changed={changed}>
          {data}
        </MainAdvertisementStyled>
      </MainContainerStyles>
    </MainStyled>
  );
};
