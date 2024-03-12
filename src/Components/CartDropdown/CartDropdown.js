import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../UI/Button/Button";
import "./CartDropdown.style.scss";
import CartItem from "../CartItem/CartItem";

const CartDropdown = ({ setCartOpen }) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutPage = () => {
    navigate("/checkout");
    setCartOpen(false);
  };
  return (
    <div className="cart-dropdown-container">
      <span
        onClick={() => setCartOpen((prevState) => !prevState)}
        style={{ marginLeft: "auto", cursor: "pointer" }}
      >
        &times;
      </span>
      <div className="cart-items">
        {cartItems.map((el) => (
          <CartItem key={el.id} cartItem={el} />
        ))}
      </div>
      <Button onClick={goToCheckoutPage}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
