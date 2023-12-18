export interface ICategoryData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export interface ICategoryStyled {
  setIsHover: (val: boolean) => void;
  setCategoryName: (val: string) => void;
}
export interface ICategory {
  categoryName: string;
}
export interface CategoriesProps {
  isHover: boolean;
  setIsHover: (val: boolean) => void;
}

export interface ICategoriesData {
  title: string;
  subTitle: string;
}

// --------CATEGORY-SLICE--------------------------------------------------------------------------------------------------------------------------------------------------------------
export interface ICategoryInitialState {
  categoryData: ICategoryData[];
  defaultCategory: ICategoryData[];
}

export interface ICategoryAction {
  key: string;
  type: string;
}
