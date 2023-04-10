import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import { NavLink as Link, useNavigate } from "react-router-dom";
import WhiteCart from "../../designAssets/Navbar/White Cart.png";
import BlackCart from "../../designAssets/Navbar/Black Cart.png";
import WhiteLogo from "../../designAssets/Navbar/White Navbar Logo.png";
import BlackLogo from "../../designAssets/Navbar/Black Navbar Logo.png";
import WhiteProfile from "../../designAssets/Navbar/White Profile.png";
import BlackProfile from "../../designAssets/Navbar/Black Profile.png";
import WhiteBurger from "../../designAssets/Navbar/White Burger.png";
import BlackBurger from "../../designAssets/Navbar/Black Burger.png";
import { CartContext } from "../../context";
import { CONSTANTS } from "../../global";
import { AuthContext } from "../../AuthContext";
import { auth } from "../../firebase";

// todo different layout for mobile

function Navbar(props) {
  const { currentUser, setCurrentUser, setUserData } = useContext(AuthContext);
  const [cart, setCart] = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log("User has been logged out.");
      setCurrentUser(null);
      setUserData(null);
    })
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      {window.innerWidth > 768 ? (
        <>
          <Header isRelative={props.isRelative}>
            <LogoContainer>
              <Link to="/">
                <Logo src={props.isLogoWhite ? WhiteLogo : BlackLogo} />
              </Link>
            </LogoContainer>
            <NavLinksContainer>
              <Link
                to="/"
                style={styles.Link}
                className={props.isWhite && "white"}
              >
                <NavLink className={props.isWhite && "white"}>Home</NavLink>
              </Link>
              <Link
                to="/classes"
                style={styles.Link}
                className={props.isWhite && "white"}
              >
                <NavLink className={props.isWhite && "white"}>Classes</NavLink>
              </Link>
              <Link to="/utensils" style={styles.Link}>
                <NavLink
                  className={(props.isHalfWhite || props.isWhite) && "white"}
                >
                  Utensils
                </NavLink>
              </Link>
              <NavLink
                style={{ position: "relative" }}
                className={(props.isHalfWhite || props.isWhite) && "white"}
                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
              >
                {/* LogIn */}
                <Img
                  src={
                    props.isCartWhite || props.isWHite
                      ? WhiteProfile
                      : BlackProfile
                  }
                />
                <Dropdown className={isProfileMenuOpen ? "active" : ""}>
                  <Link
                    to={!currentUser ? "/login" : "/profile"}
                    style={styles.Link}
                  >
                    <NavLink>Profile</NavLink>
                  </Link>
                  <NavLink onClick={handleLogout}>Logout</NavLink>
                </Dropdown>
              </NavLink>
              <Link to="/cart">
                <NavLink>
                  <Img
                    src={
                      props.isCartWhite || props.isWHite ? WhiteCart : BlackCart
                    }
                    alt="cart icon"
                  />
                  <Badge>{cart.total > 0 && cart.total}</Badge>
                  {/* <h5>{cart.total > 0 && cart.total}</h5> */}
                </NavLink>
              </Link>
            </NavLinksContainer>
          </Header>
        </>
      ) : (
        <>
          <Header isRelative={props.isRelative}>
            <MobileLinksContainer className="left">
              <NavLink onClick={() => setIsMenuOpen((prev) => !prev)}>
                <Img
                  className="bigger"
                  src={props.isWhite ? WhiteBurger : BlackBurger}
                />
              </NavLink>
              <Dropdown className={isMenuOpen ? "active" : ""}>
                <Link to="/" style={styles.Link}>
                  <NavLink>Home</NavLink>
                </Link>
                <Link to="/classes" style={styles.Link}>
                  <NavLink>Classes</NavLink>
                </Link>
                <Link to="/utensils" style={styles.Link}>
                  <NavLink>Utensils</NavLink>
                </Link>
              </Dropdown>
            </MobileLinksContainer>
            <LogoContainer>
              <Link to="/">
                <Logo src={props.isLogoWhite ? WhiteLogo : BlackLogo} />
              </Link>
            </LogoContainer>
            <MobileLinksContainer>
              <NavLink
                style={{ position: "relative" }}
                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
              >
                {/* LogIn */}
                <Img
                  src={
                    props.isCartWhite || props.isWHite
                      ? WhiteProfile
                      : BlackProfile
                  }
                />
                <Dropdown className={isProfileMenuOpen ? "active" : ""}
                  top={"150%"}
                  left={"-70%"}
                  arrowLeft={"16%"}
                >
                  <Link
                    to={!currentUser ? "/login" : "/profile"}
                    style={styles.Link}
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  >
                    <NavLink>Profile</NavLink>
                  </Link>
                  <NavLink onClick={handleLogout}>Logout</NavLink>
                </Dropdown>
              </NavLink>
              <Link to="/cart">
                <NavLink>
                  <Img
                    src={
                      props.isCartWhite || props.isWHite ? WhiteCart : BlackCart
                    }
                    alt="cart icon"
                  />
                  <Badge>{cart.total > 0 && cart.total}</Badge>
                  {/* <h5>{cart.total > 0 && cart.total}</h5> */}
                </NavLink>
              </Link>
            </MobileLinksContainer>
          </Header>
        </>
      )}
    </>
  );
}

export default Navbar;

const Header = styled.header`
  height: 70px;
  width: 87%;
  position: ${(props) => (props.isRelative ? "relative" : "absolute")};
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 21%;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Logo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const NavLinksContainer = styled.ul`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* gap: 30px; */
  gap: 4%;

  & li {
    -webkit-text-stroke: 0.01vw black;
  }
`;

const MobileLinksContainer = styled(NavLinksContainer)`
  width: 25%;
  /* background-color: pink; */

  & li {
    -webkit-text-stroke: 0;
    color: black;
  }

  &.left {
    justify-content: flex-start;
  }
`;

const NavLink = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  list-style: none;
  transition: all 1s ease;
  color: white;
  position: relative;

  ::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${CONSTANTS.pink};
    transition: all 0.5s ease;
  }

  /* &.white {
    transition: all 1s ease;
    color: white;
  } */

  &:hover {
    cursor: pointer;
    transition: all 1s ease;

    ::after {
      content: "";
    }
  }
`;

const Img = styled.img`
  height: 75%;
  width: 75%;
  object-fit: contain;

  &.bigger {
    height: 100%;
    width: 100%;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 0;
  left: -10%;
  height: 12px;
  width: 12px;
  background-color: ${CONSTANTS.pink};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.5rem;
  font-weight: 600;
`;

const styles = {
  Link: {
    textDecoration: "none",
    color: "inherit",
  },
};

const Dropdown = styled.div`
  position: absolute;
  top: ${(props) => (props.top ? props.top : "100%")};
  left: ${(props) => (props.left ? props.left : "0")};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  padding: 0.75rem 1.5rem;
  font-weight: lighter;
  border-radius: 7px;
  opacity: 0;
  pointer-events: all;
  transition: all 0.5s ease;

  ::before {
    content: "";
    position: absolute;
    top: -18%;
    /* left: 4%; */
    left: ${(props) => (props.arrowLeft ? props.arrowLeft : "4%")};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 19px solid white;
    -webkit-text-stroke: 0;
    transition: all 0.5s ease;
  }

  &.active {
    opacity: 1;
    pointer-events: all;
    transition: all 0.5s ease;
  }
`;

// const HyperLink = styled(Link)`
//   img {
//     filter: brightness(100%) grayscale(0%) opacity(100%) invert(0%);
//   }

//   img:hover {
//     filter: brightness(100%) grayscale(0%) opacity(100%) invert(100%);
//   }
// `;
