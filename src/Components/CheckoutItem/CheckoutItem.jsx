import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  addItemToCart,
  removeItemfromCart,
  clearItemfromCart,
  selectCartItems,
} from "../../store/cart/cartAction";

export const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);

  return (
    <CheckoutItemWrap>
      <ImgWrap>
        <img src={imageUrl} alt={name} />
      </ImgWrap>
      <Width>{name}</Width>
      <Quantity>
        {quantity > 1 ? (
          <Arrow
            onClick={() => dispatch(removeItemfromCart(cartItems, cartItem))}
          >
            &#10094;
          </Arrow>
        ) : null}
        <Margin>{quantity}</Margin>
        <Arrow onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>
          &#10095;
        </Arrow>
      </Quantity>
      <Width>{price}€</Width>
      <RemoveButton
        onClick={() => dispatch(clearItemfromCart(cartItems, cartItem))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemWrap>
  );
};

const CheckoutItemWrap = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImgWrap = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
const Width = styled.div`
  width: 23%;
`;
const Quantity = styled.div`
  display: flex;
  width: 23%;
`;
const Arrow = styled.div`
  cursor: pointer;
`;
const Margin = styled.div`
  margin: 0 10px;
`;
const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
