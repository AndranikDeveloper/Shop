import { useData } from '../../hooks/useData';
import {
  CategoriesContainerStyled,
  CategoriesContentStyled,
  ContentItemStyled,
  ContentItemsStyled,
} from './styled';
import { handleOnHover, handleOutHover } from '../../utils/categories-services';
import { Hover } from '../hover/hover';
import { useState } from 'react';
import { Main } from '../main/main';

export const Categories = () => {
  const [isHover, setIsHover] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const { categories } = useData(categoryName, isHover);

  return (
    <>
      <CategoriesContainerStyled>
        <CategoriesContentStyled>
          {categories?.map((c: string) => (
            <div key={c}>
              <ContentItemsStyled>
                <ContentItemStyled
                  onMouseEnter={() =>
                    handleOnHover(c, setIsHover, setCategoryName)
                  }
                  onMouseLeave={() => handleOutHover(setIsHover)}
                >
                  {c}
                  {isHover && categoryName === c && (
                    <Hover categoryName={categoryName} />
                  )}
                </ContentItemStyled>
              </ContentItemsStyled>
            </div>
          ))}
        </CategoriesContentStyled>
      </CategoriesContainerStyled>
      <Main isHover={isHover} />
    </>
  );
};
