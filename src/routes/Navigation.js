import { useContext } from "react";
import { UserContext } from "../contexts/user.context";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../src/assets/crown.svg";
import { signOutUser } from "../utils/firebase/firebase";
import CartIcon from "../Components/CartIcon/CartIcon";
import "../styles/style.scss";
import CartDropdown from "../Components/CartDropdown/CartDropdown";
import { CartContext } from "../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              SIGN IN
            </Link>
          )}
          <CartIcon setCartOpen={setCartOpen} count={cartCount} />
        </div>
        {cartOpen && <CartDropdown setCartOpen={setCartOpen} />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
