import React, { useState } from "react";
import { ICategoryData } from "../../types/categories-types";
import {
  BottomTextStyled,
  FavoritesBlockStyled,
  FavoritesIconStyled,
  FavoritesStyled,
  FavoritesTextStyled,
  InfoBottomStyled,
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
  UnderLineStyled,
} from "./styled";
import { IoMdStar } from "react-icons/io";
import { ProductKind } from "../product-kind";
import { setToMyRates } from "../../utils/products-services";

interface IProductTypeProps {
  product: ICategoryData;
}

export const ProductRightContent: React.FC<IProductTypeProps> = ({
  product,
}) => {
  const [rating, setRating] = useState(product.rating.rate);

  return (
    <ProductStyled>
      <ProductBarStyled>
        <ProductKind />
      </ProductBarStyled>
      <InfoStyled>
        <InfoLeftStyled>
          <InfoTitleStyled>{product.title}</InfoTitleStyled>
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
                      onClick={() => setToMyRates(currentRate, setRating)}
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
            <InfoPriceStyled>{product.price}£</InfoPriceStyled>
            <InfoCountStyled>Count:{product.rating.count}</InfoCountStyled>
          </>
        </InfoRightStyled>
      </InfoStyled>
      <UnderLineStyled style={{ marginTop: "10px" }} />
      <InfoBottomStyled>
        <h3>Description</h3>
        <BottomTextStyled>{product.description}</BottomTextStyled>
      </InfoBottomStyled>

      <FavoritesStyled>
        <FavoritesBlockStyled>
          <FavoritesTextStyled>Add to my Favorites</FavoritesTextStyled>
          <FavoritesIconStyled />
        </FavoritesBlockStyled>
      </FavoritesStyled>
    </ProductStyled>
  );
};
// £
