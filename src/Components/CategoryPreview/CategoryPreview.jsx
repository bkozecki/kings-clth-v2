import styled from "styled-components";
import { ProductCard } from "../../Components/ProductCard/ProductCard";

export const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewWrap>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewWrap>
  );
};

const CategoryPreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Title = styled.div`
  font-size: 28px;
  margin: 35px 0;
  cursor: pointer;
  font-weight: 700;
`;
const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
