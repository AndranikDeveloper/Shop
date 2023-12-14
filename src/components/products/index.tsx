import { useLocation } from 'react-router-dom';
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
} from './styled';
import React, { useState } from 'react';
import { sortItems } from '../../utils/products-services';

export const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortName, setSortName] = useState('Default');
  const { state } = useLocation();
  const { category, categoryName } = state;

  function setSortType(title: string) {
    setSortName(title);
    setIsOpen(false);
  }

  function openTab(e: React.MouseEvent) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  return (
    <ProductsStyled onClick={() => setIsOpen(false)}>
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
                sortItems.map(({ title, id }) => (
                  <ItemStyled key={id} onClick={() => setSortType(title)}>
                    {title}
                  </ItemStyled>
                ))}
            </SortItemsStyled>
          </ProductsRightSideStyled>
        </ProductsContentStyled>
      </ProductsContainerStyled>
    </ProductsStyled>
  );
};
