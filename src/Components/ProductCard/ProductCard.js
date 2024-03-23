import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Button, BUTTON_TYPE_CLASSES } from "../UI/Button/Button";
import { addItemToCart, selectCartItems } from "../../store/cart/cartAction";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;

  return (
    <ProductCardWrap>
      <ProductImg src={imageUrl} alt={name} />
      <ProductFooter>
        <Name>{name}</Name>
        <Price>{price}€</Price>
      </ProductFooter>
      <ProductCardBtn
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => dispatch(addItemToCart(cartItems, product))}
      >
        Add to cart
      </ProductCardBtn>
    </ProductCardWrap>
  );
};

const ProductCardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;
const ProductCardBtn = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

const ProductFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
const Price = styled.span`
  width: 10%;
`;
