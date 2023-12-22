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
import { useEffect, useState } from "react";
import { sortItems } from "../../utils/products-services";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { createCategory, setCategoryData } from "../../store/categorySlice";
import { Items } from "./items";
import { Header } from "../header";

export const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortName, setSortName] = useState("Default");
  const { state } = useLocation();
  const { category, categoryName } = state;
  const dispatch = useAppDispatch();
  const categoryData = useAppSelector(
    (state) => state.categorySlice.categoryData
  );

  function setSortType(title: string, key: string, type: string) {
    setSortName(title);
    setIsOpen(false);
    dispatch(setCategoryData({ key, type }));
  }

  useEffect(() => {
    dispatch(createCategory(category));
  }, [category, dispatch]);

  return (
    <>
      <Header />
      <ProductsStyled>
        <ProductsContainerStyled>
          <ProductsContentStyled>
            <ProductsLeftSideStyled>
              <LeftTextStyled>
                {categoryName} ({categoryData?.length})
              </LeftTextStyled>
            </ProductsLeftSideStyled>
            <ProductsRightSideStyled>
              <ButtonBlockStyled>
                <RightTextStyled>SORT</RightTextStyled>
                <RightSortButtonStyled
                  onClick={() => setIsOpen((prev) => !prev)}
                >
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
          <Items category={categoryData} />
        </ProductsContainerStyled>
      </ProductsStyled>
    </>
  );
};
