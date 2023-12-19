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
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { setMyRates } from "../../store/ratesSlice";

interface IProductTypeProps {
  product: ICategoryData;
}

export const ProductRightContent: React.FC<IProductTypeProps> = ({
  product,
}) => {
  const [rating, setRating] = useState(product.rating.rate);
  const [ratedProduct, setRatedProduct] = useState<ICategoryData>(product);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  function setToMyRates(rateVal: number) {
    setRating(rateVal);
    const changedProduct = {
      ...product,
      rating: {
        ...product.rating,
        rate: rateVal,
      },
    };
    dispatch(setMyRates(changedProduct));
  }

  return (
    <ProductStyled>
      <ProductBarStyled>
        <ProductKind />
      </ProductBarStyled>
      <InfoStyled>
        <InfoLeftStyled>
          <InfoTitleStyled>{product.title}</InfoTitleStyled>
          <InfoRatingStyled>
            {[...Array(5)].map((star, idx) => {
              const currentRate = idx + 1;
              return (
                <>
                  <label>
                    <RateInputStyled
                      type="radio"
                      name="rate"
                      value={currentRate}
                      onClick={() => setToMyRates(currentRate)}
                    />
                    <IoMdStar
                      size={20}
                      style={{ cursor: "pointer" }}
                      color={currentRate <= rating ? "black" : "gray"}
                    />
                  </label>
                </>
              );
            })}
          </InfoRatingStyled>
        </InfoLeftStyled>
        <InfoRightStyled>
          <>
            <InfoPriceStyled>{product.price}£</InfoPriceStyled>
            <InfoCountStyled>Count:{product.rating.count}</InfoCountStyled>
          </>
        </InfoRightStyled>
      </InfoStyled>
    </ProductStyled>
  );
};
// £
