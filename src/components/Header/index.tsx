import {
  Navigation,
  Logo,
  SubLogo,
  ButtonContainerNavigation,
  NavigationButton,
} from '../../components/Header/styles';

import { FaCartPlus } from "react-icons/fa";
import React from "react";

const Header = () => {
  return (
    <>
      <Navigation>
        <Logo>
          Mini
          <SubLogo>Ecommerce</SubLogo>
        </Logo>

        <ButtonContainerNavigation>
          <NavigationButton>
            <FaCartPlus />
          </NavigationButton>
        </ButtonContainerNavigation>
      </Navigation>
    </>
  );
};

export default Header;
