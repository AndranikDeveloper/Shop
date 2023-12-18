import { NavigateFunction } from "react-router-dom";
import { ISortItem } from "../types/products-type";
import { v4 } from "uuid";
import { ICategoryData } from "../types/categories-types";
import { getImage } from "./images-services";

export const sortItems: ISortItem[] = [
  { title: "Price: Low-High", id: v4(), key: "price", type: "asc" },
  { title: "Price: High-Low", id: v4(), key: "price", type: "desc" },
  { title: "Rates: Low-High", id: v4(), key: "rate", type: "asc" },
  { title: "Rates: High-Low", id: v4(), key: "rate", type: "desc" },
  { title: "Count: Low-High", id: v4(), key: "count", type: "asc" },
  { title: "Count: High-Low", id: v4(), key: "count", type: "desc" },
  { title: "Default", id: v4(), key: "default", type: "default" },
];

export const imagesData = [
  { src: getImage("bag1"), id: v4() },
  { src: getImage("bag2"), id: v4() },
  { src: getImage("bag3"), id: v4() },
  { src: getImage("bag4"), id: v4() },
  { src: getImage("bag5"), id: v4() },
  { src: getImage("bag6"), id: v4() },
  { src: getImage("bag7"), id: v4() },
  { src: getImage("bag8"), id: v4() },
];

export function selectProduct(
  id: number,
  navigate: NavigateFunction,
  category: ICategoryData
) {
  navigate(`/product/:${id}`, { state: category });
}
