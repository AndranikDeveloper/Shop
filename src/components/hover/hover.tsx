import {
  CategoryContentStyled,
  CategoryTitleStyled,
  HoverContainerStyled,
  HoverContentStyled,
} from './styled';
import { ICategory } from '../../types/categories-types';
import { useData } from '../../hooks/useData';
import { useEffect } from 'react';

export const Hover = ({ categoryName }: ICategory) => {
  const { category, refetch: refetchCategory } = useData(categoryName);

  useEffect(() => {
    refetchCategory();
  }, [refetchCategory]);

  return (
    <HoverContainerStyled>
      <HoverContentStyled>
        {category?.map((c) => (
          <CategoryContentStyled key={c.id}>
            <CategoryTitleStyled>{c.title}</CategoryTitleStyled>
          </CategoryContentStyled>
        ))}
      </HoverContentStyled>
    </HoverContainerStyled>
  );
};
