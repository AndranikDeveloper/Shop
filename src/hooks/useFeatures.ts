import { useAppDispatch, useAppSelector } from "./useStore";

export const useFeatures = () => {
  const ratedProduct = useAppSelector(
    (state) => state.changedProductSlice.newProduct
  );
  const dispatch = useAppDispatch();
  return { ratedProduct, dispatch };
};
