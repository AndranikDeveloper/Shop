import { ICategoryData } from "../../../types/categories-types";
import { ImageStyled, ItemsStyled, ItemStyled } from "./styled";

interface IItems {
  category: ICategoryData[];
}

export const Items: React.FC<IItems> = ({ category }) => {
  return (
    <ItemsStyled>
      {category.map(({ id, image }) => (
        <ItemStyled key={id}>
          <ImageStyled src={image} />
        </ItemStyled>
      ))}
    </ItemsStyled>
  );
};
