import React from 'react';
import { ICategoryData } from '../../types/categories-types';
import { ProductTypeStyled } from './styled';

interface IProductTypeProps {
  product: ICategoryData;
}

export const ProductType: React.FC<IProductTypeProps> = () => {
  return <ProductTypeStyled></ProductTypeStyled>;
};
