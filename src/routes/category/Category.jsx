import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { selectCategories } from "../../store/categories/categoryAction";

export const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);

  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

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
