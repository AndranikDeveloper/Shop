import { useQuery } from "@tanstack/react-query";
import { getClothes } from "../services";

export const useData = () => {
  const clothes = useQuery({
    queryKey: ["clothes"],
    queryFn: () => getClothes("products"),
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getClothes("products/categories"),
  });

  const category = useQuery({
    queryKey: ["category"],
    queryFn: () => getClothes("products/category/jewelery"),
  });

  return { clothes, categories, category };
};
