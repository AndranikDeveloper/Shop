import { ISortItem } from "../types/products-type";
import { v4 } from "uuid";

export const sortItems: ISortItem[] = [
  { title: "Price: Low-High", id: v4(), key: "price", type: "asc" },
  { title: "Price: High-Low", id: v4(), key: "price", type: "desc" },
  { title: "Rates: Low-High", id: v4(), key: "rating.rates", type: "asc" },
  { title: "Rates: High-Low", id: v4(), key: "rating.rates", type: "desc" },
  { title: "Count: Low-High", id: v4(), key: "rating.count", type: "asc" },
  { title: "Count: High-Low", id: v4(), key: "rating.count", type: "desc" },
  { title: "Default", id: v4(), key: "default", type: "default" },
];
