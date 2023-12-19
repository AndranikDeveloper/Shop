import { useState } from "react";
import { productKinds, selectKind } from "../../utils/products-services";
import { KindStyled, KindsStyled, ProductKindStyled } from "./styled";
import { IProductKinds } from "../../types/products-type";

export const ProductKind = () => {
  const [currentKind, setCurrentKind] = useState<IProductKinds>(
    productKinds[0]
  );

  return (
    <ProductKindStyled>
      <KindsStyled>
        {productKinds.map((k) => (
          <KindStyled
            key={k.id}
            onClick={() => selectKind(setCurrentKind, k)}
            $isEqual={k.id === currentKind.id}
          >
            {k.title}
          </KindStyled>
        ))}
      </KindsStyled>
    </ProductKindStyled>
  );
};
