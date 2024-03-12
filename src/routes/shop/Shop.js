import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../categories/CategoriesPreview";
import { Category } from "../category/Category";

import "./Shop.style.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
