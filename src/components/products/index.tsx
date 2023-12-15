import { useLocation } from "react-router-dom";
import {
  ButtonBlockStyled,
  ItemStyled,
  LeftTextStyled,
  ProductsContainerStyled,
  ProductsContentStyled,
  ProductsLeftSideStyled,
  ProductsRightSideStyled,
  ProductsStyled,
  RightSortButtonStyled,
  RightTextStyled,
  SortButtonTextStyled,
  SortIconStyled,
  SortItemsStyled,
} from "./styled";
import { useState } from "react";
import { sortItems } from "../../utils/products-services";
import { useAppDispatch } from "../../hooks/useStore";
import { setCategoryData } from "../../store/categorySlice";
import { Items } from "./items";

export const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortName, setSortName] = useState("Default");
  const { state } = useLocation();
  const { category, categoryName } = state;
  const dispatch = useAppDispatch();

  function setSortType(title: string, key: string, type: string) {
    setSortName(title);
    setIsOpen(false);
    dispatch(setCategoryData({ category, key, type }));
  }

  function openTab() {
    setIsOpen((prev) => !prev);
  }

  return (
    <ProductsStyled>
      <ProductsContainerStyled>
        <ProductsContentStyled>
          <ProductsLeftSideStyled>
            <LeftTextStyled>
              {categoryName} ({category.length})
            </LeftTextStyled>
          </ProductsLeftSideStyled>
          <ProductsRightSideStyled>
            <ButtonBlockStyled>
              <RightTextStyled>SORT</RightTextStyled>
              <RightSortButtonStyled onClick={openTab}>
                <SortButtonTextStyled>{sortName}</SortButtonTextStyled>
                <SortIconStyled $isOpen={isOpen} />
              </RightSortButtonStyled>
            </ButtonBlockStyled>
            <SortItemsStyled>
              {isOpen &&
                sortItems.map(({ title, id, key, type }) => (
                  <ItemStyled
                    key={id}
                    onClick={() => setSortType(title, key, type)}
                  >
                    {title}
                  </ItemStyled>
                ))}
            </SortItemsStyled>
          </ProductsRightSideStyled>
        </ProductsContentStyled>
        <Items category={category} />
      </ProductsContainerStyled>
    </ProductsStyled>
  );
};
