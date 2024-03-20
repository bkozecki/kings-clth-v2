import { useSelector } from "react-redux";

import { CategoryPreview } from "../../Components/CategoryPreview/CategoryPreview";
import { selectCategories } from "../../store/categories/categoryAction";

export const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};
