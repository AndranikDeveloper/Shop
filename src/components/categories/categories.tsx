import { useState } from "react";
import { useData } from "../../hooks/useData";
import {
  CategoriesContainerStyled,
  CategoriesContentStyled,
  ContentItemStyled,
  ContentItemsStyled,
} from "./styled";

export const Categories = () => {
  const [isHover, setIsHover] = useState(false);
  const { categories, category } = useData();
  console.log(isHover);

  return (
    <CategoriesContainerStyled>
      <CategoriesContentStyled>
        {categories?.map((c: string) => (
          <ContentItemsStyled key={c}>
            <ContentItemStyled
              onMouseEnter={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
            >
              {c}
            </ContentItemStyled>
          </ContentItemsStyled>
        ))}
      </CategoriesContentStyled>
    </CategoriesContainerStyled>
  );
};
