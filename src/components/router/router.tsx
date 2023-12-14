import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Root } from "../root";
import { Main } from "../main";
import { Products } from "../products";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index path="/" element={<Main />} />
      <Route path="/products" element={<Products />} />
    </Route>
  )
);
