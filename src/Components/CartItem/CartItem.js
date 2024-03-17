import styled from "styled-components";
import { Text } from "../UI/Text/Text";

export const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemWrap>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Text>{name}</Text>
        <Text>
          {quantity} x ${price}
        </Text>
      </ItemDetails>
    </CartItemWrap>
  );
};

const CartItemWrap = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 20px;
`;
