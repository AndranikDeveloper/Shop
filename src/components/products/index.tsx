import { useLocation } from "react-router-dom";
import {
  ProductsContainerStyled,
  ProductsContentStyled,
  ProductsStyled,
} from "./styled";

export const Products = () => {
  const { state } = useLocation();
  const { category, categoryName } = state;

  return (
    <ProductsStyled>
      <ProductsContainerStyled>
        <ProductsContentStyled></ProductsContentStyled>
      </ProductsContainerStyled>
    </ProductsStyled>
  );
};
