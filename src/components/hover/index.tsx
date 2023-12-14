import {
  CategoryContentStyled,
  CategoryPreloaderStyled,
  CategoryTitleStyled,
  HoverContainerStyled,
  HoverContentStyled,
} from "./styled";
import { ICategory } from "../../types/categories-types";
import { useData } from "../../hooks/useData";
import { useNavigate } from "react-router-dom";
import preloader from "../../assets/Iphone-spinner-2.gif";

export const Hover = ({ categoryName }: ICategory) => {
  const { category } = useData(categoryName);
  const navigate = useNavigate();

  return (
    <HoverContainerStyled>
      <HoverContentStyled>
        {category?.length ? (
          <CategoryContentStyled>
            <CategoryTitleStyled
              onClick={() =>
                navigate("/products", { state: { category, categoryName } })
              }
            >
              Show All Things
            </CategoryTitleStyled>
          </CategoryContentStyled>
        ) : (
          <CategoryContentStyled>
            <CategoryPreloaderStyled src={preloader} />
          </CategoryContentStyled>
        )}
      </HoverContentStyled>
    </HoverContainerStyled>
  );
};
