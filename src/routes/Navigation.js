import { useContext } from "react";
import { UserContext } from "../contexts/user.context";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../src/assets/crown.svg";
import { signOutUser } from "../utils/firebase/firebase";
import { CartIcon } from "../Components/CartIcon/CartIcon";
import { CartDropdown } from "../Components/CartDropdown/CartDropdown";
import { CartContext } from "../contexts/cart.context";
import styled from "styled-components";

import "../styles/style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);

  return (
    <>
      <NavigationWrap>
        <LogoLinkWrap className="logo-container" to="/">
          <CrownLogo className="logo" />
        </LogoLinkWrap>
        <NavLinksWrap>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <Button onClick={signOutUser}>SIGN OUT</Button>
          ) : (
            <NavLink to="/authentication">SIGN IN</NavLink>
          )}
          <CartIcon setCartOpen={setCartOpen} count={cartCount} />
        </NavLinksWrap>
        {cartOpen && <CartDropdown setCartOpen={setCartOpen} />}
      </NavigationWrap>
      <Outlet />
    </>
  );
};

export default Navigation;

const NavigationWrap = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const LogoLinkWrap = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
`;

const NavLinksWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 25px;
`;

const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

//TODO: change this universal button
const Button = styled.span`
  padding: 10px 15px;
  cursor: pointer;
`;
