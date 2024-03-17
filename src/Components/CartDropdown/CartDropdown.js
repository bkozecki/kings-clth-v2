import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../contexts/cart.context";
import {
  Button,
  DefaultBtn,
  GoogleSignInBtn,
  InvertedBtn,
  BUTTON_TYPE_CLASSES,
} from "../UI/Button/Button";
import { CartItem } from "../CartItem/CartItem";

export const CartDropdown = ({ setCartOpen }) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutPage = () => {
    navigate("/checkout");
    setCartOpen(false);
  };
  return (
    <CartDropdownWrap>
      <CloseBtn onClick={() => setCartOpen((prevState) => !prevState)}>
        &times;
      </CloseBtn>
      <CartItems className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((el) => <CartItem key={el.id} cartItem={el} />)
        ) : (
          <EmptyMsg>Your cart is empty!</EmptyMsg>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.default}
        onClick={goToCheckoutPage}
      >
        Checkout
      </Button>
    </CartDropdownWrap>
  );
};

const CartDropdownWrap = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${DefaultBtn},
  ${GoogleSignInBtn},
  ${InvertedBtn} {
    margin-top: auto;
  }
`;

const EmptyMsg = styled.div`
  font-size: 18px;
  margin-top: 2rem;
  text-align: center;
`;

export const CloseBtn = styled.span`
  margin-left: auto;
  font-size: 1.4rem;
  cursor: pointer;
`;

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
