import { selectImage, swipe } from "../../utils/products-services";
import {
  ButtonWrapperStyled,
  DownIconStyled,
  SwiperBarStyled,
  SwiperBlockStyled,
  SwiperImageStyled,
  SwiperStyled,
  UpIconStyled,
} from "../products/item/styled";
import { Dispatch, SetStateAction } from "react";
import { IImagesData } from "../../types/products-type";

interface ProductLeftContentProps {
  isDisabled: { up: boolean; down: boolean };
  setMoveSize: Dispatch<SetStateAction<number>>;
  setFirstImagesSize: Dispatch<SetStateAction<number>>;
  moveSize: number;
  setProductImage: Dispatch<SetStateAction<string>>;
  productImage: string;
  images: IImagesData[];
}

export const ProductLeftContent: React.FC<ProductLeftContentProps> = ({
  isDisabled,
  setMoveSize,
  setFirstImagesSize,
  moveSize,
  setProductImage,
  productImage,
  images,
}) => {
  return (
    <>
      <SwiperBarStyled>
        <ButtonWrapperStyled disabled={isDisabled.up}>
          <UpIconStyled
            onClick={() => swipe("up", setMoveSize, setFirstImagesSize)}
          />
        </ButtonWrapperStyled>
        <SwiperStyled>
          {images?.map((image) => (
            <SwiperBlockStyled $moveSize={moveSize} key={image.id}>
              <SwiperImageStyled
                src={image.src}
                alt="swiper-item"
                onClick={() => selectImage(image.src, setProductImage)}
              />
            </SwiperBlockStyled>
          ))}
        </SwiperStyled>
        <ButtonWrapperStyled disabled={isDisabled.down}>
          <DownIconStyled
            onClick={() => swipe("down", setMoveSize, setFirstImagesSize)}
          />
        </ButtonWrapperStyled>
      </SwiperBarStyled>
      <img src={productImage} alt="clothes" />
    </>
  );
};
