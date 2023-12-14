import { ICategoriesData } from '../types/categories-types';

export function handleOnHover(
  name: string,
  setIsHover: (val: boolean) => void,
  setCategoryName: (val: string) => void
) {
  setIsHover(true);
  setCategoryName(name);
}

export function handleOutHover(setIsHover: (val: boolean) => void) {
  setIsHover(false);
}

export const categoriesData: ICategoriesData[] = [
  {
    title: 'Clothing',
    subTitle: 'All Clothing',
  },
  {
    title: 'Jewelery',
    subTitle: 'All Jeweleries',
  },
  {
    title: '',
    subTitle: 'All Clothing',
  },
];
