import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { CategoriesPreview } from "../categories/CategoriesPreview";
import { Category } from "../category/Category";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase";
import { setCategories } from "../../store/categories/categoryAction";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesArr = await getCategoriesAndDocs("categories");
      dispatch(setCategories(categoriesArr));
    };

    getCategoryMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
