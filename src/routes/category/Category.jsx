import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { CategoriesContext } from "../../contexts/categories.context";
import { ProductCard } from "../../Components/ProductCard/ProductCard";

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <CategoryWrap>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </CategoryWrap>
  );
};

const CategoryWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
