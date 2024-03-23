import { useDispatch } from "react-redux";
import styled from "styled-components";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIcon = ({ setCartOpen, count }) => {
  const dispatch = useDispatch();
  //TODO: create a fn to open close cart on click/mouseleave
  return (
    <CartIconWrap
      onClick={() => dispatch(setCartOpen((prevState) => !prevState))}
    >
      <ShoppingIconWrap />
      <ItemCount>{count}</ItemCount>
    </CartIconWrap>
  );
};

const CartIconWrap = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIconWrap = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
