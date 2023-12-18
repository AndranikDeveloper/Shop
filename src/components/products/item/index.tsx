import { useLocation } from 'react-router-dom';
import {
  ButtonWrapperStyled,
  DownIconStyled,
  LeftImageStyled,
  LeftSideStyled,
  ProductContainerStyled,
  ProductContentStyled,
  ProductStyled,
  SwiperBarStyled,
  SwiperBlockStyled,
  SwiperImageStyled,
  SwiperStyled,
  UpIconStyled,
} from './styled';
import { useEffect, useState } from 'react';

import {
  imagesData,
  selectImage,
  swipe,
} from '../../../utils/products-services';
import { v4 } from 'uuid';

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
  }, [product.image]);

  return (
    <ProductStyled>
      <ProductContainerStyled>
        <ProductContentStyled>
          <LeftSideStyled>
            <SwiperBarStyled>
              <ButtonWrapperStyled disabled={isDisabled.up}>
                <UpIconStyled
                  onClick={() => swipe('up', setMoveSize, setFirstImagesSize)}
                />
              </ButtonWrapperStyled>
              <SwiperStyled>
                {images?.map((image) => (
                  <SwiperBlockStyled $moveSize={moveSize} key={image.id}>
                    <SwiperImageStyled
                      src={image.src}
                      alt='swiper-item'
                      onClick={() => selectImage(image.src, setProductImage)}
                    />
                  </SwiperBlockStyled>
                ))}
              </SwiperStyled>
              <ButtonWrapperStyled disabled={isDisabled.down}>
                <DownIconStyled
                  onClick={() => swipe('down', setMoveSize, setFirstImagesSize)}
                />
              </ButtonWrapperStyled>
            </SwiperBarStyled>
            <LeftImageStyled src={productImage} />
          </LeftSideStyled>
        </ProductContentStyled>
      </ProductContainerStyled>
    </ProductStyled>
  );
};
