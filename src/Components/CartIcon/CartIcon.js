import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.style.scss";

const CartIcon = ({ setCartOpen, count }) => {
  //TODO: create a fn to open close cart on click/mouseleave
  return (
    <div
      className="cart-icon-container"
      onClick={() => setCartOpen((prevState) => !prevState)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;
