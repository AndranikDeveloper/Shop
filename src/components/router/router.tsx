import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Root } from "../root";
import { Main } from "../main";
import { Products } from "../products";
import { Item } from "../products/item";
import { Authentication } from "../authentication";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Authentication />} />
      <Route index path="/main" element={<Main />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Item />} />
    </Route>
  )
);
