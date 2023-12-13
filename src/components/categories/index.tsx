import { useData } from '../../hooks/useData';
import {
  CategoriesContainerStyled,
  CategoriesContentStyled,
  ContentItemStyled,
  ContentItemsStyled,
} from './styled';
import { handleOnHover, handleOutHover } from '../../utils/categories-services';
import { Hover } from '../hover';
import { useState } from 'react';
import { Advertisement } from '../advertisement';

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
      <Advertisement isHover={isHover} />
    </>
  );
};
