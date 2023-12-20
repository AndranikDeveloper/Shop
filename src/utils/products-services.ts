import { NavigateFunction } from "react-router-dom";
import { IImagesData, IProductKinds, ISortItem } from "../types/products-type";
import { v4 } from "uuid";
import { ICategoryData } from "../types/categories-types";
import { getImage } from "./images-services";
import { Dispatch, SetStateAction } from "react";
import { setMyRates } from "../store/ratesSlice";
import { setNewProduct } from "../store/changedProductSlice";
import { AppDispatch } from "../store/store";

export const sortItems: ISortItem[] = [
  { title: "Price: Low-High", id: v4(), key: "price", type: "asc" },
  { title: "Price: High-Low", id: v4(), key: "price", type: "desc" },
  { title: "Rates: Low-High", id: v4(), key: "rate", type: "asc" },
  { title: "Rates: High-Low", id: v4(), key: "rate", type: "desc" },
  { title: "Count: Low-High", id: v4(), key: "count", type: "asc" },
  { title: "Count: High-Low", id: v4(), key: "count", type: "desc" },
  { title: "Default", id: v4(), key: "default", type: "default" },
];
// --------SWIPER-CUSTOM-IMAGES-------------------------------------------------------------------------------------------------------------------------------------

export const imagesData: IImagesData[] = [
  { src: getImage("bag1"), id: v4() },
  { src: getImage("bag2"), id: v4() },
  { src: getImage("bag3"), id: v4() },
  { src: getImage("bag4"), id: v4() },
  { src: getImage("bag5"), id: v4() },
  { src: getImage("bag6"), id: v4() },
  { src: getImage("bag7"), id: v4() },
  { src: getImage("bag8"), id: v4() },
];
// --------SELECT-PRODUCT------------------------------------------------------------------------------------------------------------------------------------

export function selectProduct(
  id: number,
  navigate: NavigateFunction,
  category: ICategoryData
) {
  navigate(`/product/:${id}`, { state: category });
}
// --------SWIPE-IMAGES------------------------------------------------------------------------------------------------------------------------------------

export function swipe(
  type: "up" | "down",
  setMoveSize: Dispatch<SetStateAction<number>>,
  setFirstImagesSize: Dispatch<SetStateAction<number>>
) {
  if (type === "up") {
    setMoveSize((prev) => prev + 70);
    setFirstImagesSize((prev) => prev + 70);
  } else {
    setMoveSize((prev) => prev - 70);
    setFirstImagesSize((prev) => prev - 70);
  }
}
// --------SELECT-IMAGE------------------------------------------------------------------------------------------------------------------------------------
export function selectImage(
  src: string,
  setProductImage: Dispatch<SetStateAction<string>>
) {
  setProductImage(src);
}
// --------PRODUCT-KINDS------------------------------------------------------------------------------------------------------------------------------------

export const productKinds: IProductKinds[] = [
  { id: v4(), title: "First Kind" },
  { id: v4(), title: "Second Kind" },
  { id: v4(), title: "Third Kind" },
  { id: v4(), title: "Fourth Kind" },
];
// --------SELECT-PRODUCT-KIND-------------------------------------------------------------------------------------------------------------------------------------
export function selectKind(
  setCurrentKind: (val: IProductKinds) => void,
  chosenKind: IProductKinds
) {
  setCurrentKind(chosenKind);
}

// -------CHANGE-PRODUCT-RATE-----------------------------------------------------------------------------------------------------------------------------------------------------------------
export function setToMyRates(
  rateVal: number,
  setRating: (val: number) => void,
  product: ICategoryData,
  dispatch: AppDispatch
) {
  setRating(rateVal);
  const changedProduct = {
    ...product,
    rating: {
      ...product.rating,
      rate: rateVal,
    },
  };
  dispatch(setMyRates(changedProduct));
  dispatch(setNewProduct(changedProduct));
}
