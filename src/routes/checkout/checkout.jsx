import { useContext } from "react";
import styled from "styled-components";

import { CartContext } from "../../contexts/cart.context";
import { CheckoutItem } from "../../Components/CheckoutItem/CheckoutItem";

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutWrap>
      <CheckoutHeader>
        <Header>
          <span>Product</span>
        </Header>
        <Header>
          <span>Description</span>
        </Header>
        <Header>
          <span>Quantity</span>
        </Header>
        <Header>
          <span>Price</span>
        </Header>
        <Header>
          <span>Remove</span>
        </Header>
      </CheckoutHeader>

      {cartItems.map((el) => (
        <CheckoutItem key={el.id} cartItem={el} />
      ))}
      <Total>Total: {cartTotal}€</Total>
    </CheckoutWrap>
  );
};

const CheckoutWrap = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const Header = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const Total = styled.span`
margin-top: 30px;
margin-left: auto;
font-size: 36px;
}
`;
