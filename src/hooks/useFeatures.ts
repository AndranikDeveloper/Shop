import { useAppDispatch } from "./useStore";

export const useFeatures = () => {
  const dispatch = useAppDispatch();
  return { dispatch };
};
