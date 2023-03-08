/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { GlobalStyle } from "../styles/globalstyle";
const Header = dynamic(() => import("../src/components/Header/index"), {
  ssr: false,
});

const CartShopping = dynamic(() => import("../src/components/CartShopping/index"), {
  ssr: false,
});

import dynamic from "next/dynamic";
import Main from "../src/components/Main/index";
import Footer from "../src/components/Footer/index";


function Home() {

  return (
    <>
      <GlobalStyle  />
      <Header />
      <Main />
      <CartShopping />
      <Footer />
    </>
  );
}

export default Home;
