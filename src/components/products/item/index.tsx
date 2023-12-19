import { useLocation } from "react-router-dom";
import {
  LeftSideStyled,
  ProductContainerStyled,
  ProductContentStyled,
  ProductStyled,
  RightSideStyled,
} from "./styled";
import { useEffect, useState } from "react";

import { imagesData } from "../../../utils/products-services";
import { v4 } from "uuid";
import { ProductLeftContent } from "../../product-left-content/index";
import { ProductRightContent } from "../../product-right-content/index";

export const Item = () => {
  const { state: product } = useLocation();
  const [productImage, setProductImage] = useState(product.image);
  const [moveSize, setMoveSize] = useState(0);
  const [firstImagesSize, setFirstImagesSize] = useState(280);
  const [images, setImages] = useState(imagesData);
  const [isDisabled, setIsDisabled] = useState({
    up: false,
    down: false,
  });

  useEffect(() => {
    if (firstImagesSize === 0) {
      setIsDisabled((prev) => ({ ...prev, down: true }));
    } else if (firstImagesSize === 280) {
      setIsDisabled((prev) => ({ ...prev, up: true }));
    } else {
      setIsDisabled((prev) => ({ ...prev, down: false }));
      setIsDisabled((prev) => ({ ...prev, up: false }));
    }
  }, [firstImagesSize, moveSize]);

  useEffect(() => {
    setImages((prev) => {
      return [{ src: product.image, id: v4() }, ...prev];
    });
  }, []);

  return (
    <ProductStyled>
      <ProductContainerStyled>
        <ProductContentStyled>
          <LeftSideStyled>
            <ProductLeftContent
              moveSize={moveSize}
              isDisabled={isDisabled}
              setFirstImagesSize={setFirstImagesSize}
              setMoveSize={setMoveSize}
              setProductImage={setProductImage}
              productImage={productImage}
              images={images}
            />
          </LeftSideStyled>

          <RightSideStyled>
            <ProductRightContent product={product} />
          </RightSideStyled>
        </ProductContentStyled>
      </ProductContainerStyled>
    </ProductStyled>
  );
};
