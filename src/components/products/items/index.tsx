import { useNavigate } from "react-router-dom";
import { ICategoryData } from "../../../types/categories-types";
import {
  ImageStyled,
  InfoStyled,
  ItemsStyled,
  ItemStyled,
  PriceStyled,
  TextStyled,
} from "./styled";
import { selectProduct } from "../../../utils/products-services";

interface IItems {
  category: ICategoryData[];
}

export const Items: React.FC<IItems> = ({ category }) => {
  const navigate = useNavigate();

  return (
    <ItemsStyled>
      {category?.map((item) => (
        <ItemStyled
          key={item.id}
          onClick={() => selectProduct(item.id, navigate, item)}
        >
          <ImageStyled src={item.image} />
          <InfoStyled>
            <TextStyled>{item.title}</TextStyled>
            <PriceStyled>{item.price} £</PriceStyled>
          </InfoStyled>
        </ItemStyled>
      ))}
    </ItemsStyled>
  );
};
