import { useLocation } from "react-router-dom";
import {
  ButtonWrapperStyled,
  DownIconStyled,
  ProductContainerStyled,
  ProductContentStyled,
  ProductStyled,
  SwiperBarStyled,
  SwiperBlockStyled,
  SwiperImageStyled,
  SwiperStyled,
  UpIconStyled,
} from "./styled";
import { useEffect, useState } from "react";

import { imagesData } from "../../../utils/products-services";
import "./style.css";

export const Item = () => {
  const { state: product } = useLocation();
  const [productImage, setProductImage] = useState(product.image);
  const [moveSize, setMoveSize] = useState(0);
  const [maximalSize, setMaximalSize] = useState(imagesData.length * 70);
  const [isDisabled, setIsDisabled] = useState({
    up: false,
    down: false,
  });

  function swipe(type: "up" | "down") {
    if (type === "up") {
      setMoveSize((prev) => prev + 70);
    } else {
      setMoveSize((prev) => prev - 70);
    }
  }

  useEffect(() => {}, [moveSize]);

  return (
    <ProductStyled>
      <ProductContainerStyled>
        <ProductContentStyled>
          <SwiperBarStyled>
            <ButtonWrapperStyled>
              <UpIconStyled onClick={() => swipe("up")} />
            </ButtonWrapperStyled>
            <SwiperStyled>
              {imagesData.map((image) => (
                <SwiperBlockStyled $moveSize={moveSize}>
                  <SwiperImageStyled src={image.src} alt="swiper-item" />
                </SwiperBlockStyled>
              ))}
            </SwiperStyled>
            <DownIconStyled onClick={() => swipe("down")} />
          </SwiperBarStyled>
        </ProductContentStyled>
      </ProductContainerStyled>
    </ProductStyled>
  );
};
