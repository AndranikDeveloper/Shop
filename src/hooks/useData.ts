import { useQuery } from "@tanstack/react-query";
import { getClothes } from "../services";
import { ICategoryData } from "../types/categories-types";

export const useData = (categoryName: string, isHover?: boolean) => {
  const clothes = useQuery({
    queryKey: ["clothes"],
    queryFn: () => getClothes("products"),
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getClothes("categories"),
  });

  const {
    data: category,
    isSuccess: isSuccessCategory,
    isLoading,
    isFetching,
  } = useQuery<ICategoryData[]>({
    queryKey: ["category"],
    queryFn: () => getClothes(`products?category=${categoryName}`),
    enabled: isHover,
  });

  return {
    clothes,
    categories,
    category: isFetching ? [] : category,
    isSuccessCategory,
    isLoading,
  };
};
