import React from "react";
import Logo from "../assets/twosightLogo.png";
const Header = () => {
  return (
    <>
      <div className="header-class">
        <img src={Logo} className="logo" alt="logo" />
      </div>
    </>
  );
};
export default Header;
