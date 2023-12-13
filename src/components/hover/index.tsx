import {
  CategoryContentStyled,
  CategoryTitleStyled,
  HoverContainerStyled,
  HoverContentStyled,
} from "./styled";
import { ICategory } from "../../types/categories-types";
import { useData } from "../../hooks/useData";
import { useEffect } from "react";

export const Hover = ({ categoryName }: ICategory) => {
  const {
    category,
    refetch: refetchCategory,
    isLoading,
  } = useData(categoryName);

  useEffect(() => {
    refetchCategory();
  }, [refetchCategory]);
console.log(isLoading);

  return (
    <HoverContainerStyled>
      <HoverContentStyled>
        {isLoading ? <h1>Loading...</h1> : category?.map((c) => (
          <CategoryContentStyled key={c.id}>
            <CategoryTitleStyled>{c.title}</CategoryTitleStyled>
            asdasdasd
          </CategoryContentStyled>
        ))}
      </HoverContentStyled>
    </HoverContainerStyled>
  );
};
