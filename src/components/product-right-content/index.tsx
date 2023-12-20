import React, { useEffect, useState } from "react";
import { ICategoryData } from "../../types/categories-types";
import {
  InfoCountStyled,
  InfoLeftStyled,
  InfoPriceStyled,
  InfoRatingStyled,
  InfoRightStyled,
  InfoStyled,
  InfoTitleStyled,
  ProductBarStyled,
  ProductStyled,
  RateInputStyled,
} from "./styled";
import { IoMdStar } from "react-icons/io";
import { ProductKind } from "../product-kind";
import { setNewProduct } from "../../store/changedProductSlice";
import { useFeatures } from "../../hooks/useFeatures";
import { setToMyRates } from "../../utils/products-services";

interface IProductTypeProps {
  product: ICategoryData;
}

export const ProductRightContent: React.FC<IProductTypeProps> = ({
  product,
}) => {
  const { ratedProduct, dispatch } = useFeatures();
  const [rating, setRating] = useState(ratedProduct?.rating.rate);

  useEffect(() => {
    dispatch(setNewProduct(product));
  }, [dispatch, product]);

  return (
    <ProductStyled>
      <ProductBarStyled>
        <ProductKind />
      </ProductBarStyled>
      <InfoStyled>
        <InfoLeftStyled>
          <InfoTitleStyled>{ratedProduct?.title}</InfoTitleStyled>
          <InfoRatingStyled>
            {[...Array(5)].map((_, idx) => {
              const currentRate = idx + 1;
              return (
                <>
                  <label>
                    <RateInputStyled
                      type="radio"
                      name="rate"
                      value={currentRate}
                      onClick={() =>
                        setToMyRates(currentRate, setRating, product, dispatch)
                      }
                    />
                    <IoMdStar
                      size={20}
                      style={{ cursor: "pointer" }}
                      color={currentRate <= rating! ? "black" : "gray"}
                    />
                  </label>
                </>
              );
            })}
          </InfoRatingStyled>
        </InfoLeftStyled>
        <InfoRightStyled>
          <>
            <InfoPriceStyled>{ratedProduct?.price}£</InfoPriceStyled>
            <InfoCountStyled>
              Count:{ratedProduct?.rating?.count}
            </InfoCountStyled>
          </>
        </InfoRightStyled>
      </InfoStyled>
    </ProductStyled>
  );
};
// £
