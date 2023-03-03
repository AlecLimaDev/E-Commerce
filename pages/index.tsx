/* eslint-disable react/jsx-key */
import React, { FunctionComponent, useEffect, useState } from "react";
import { GlobalStyle } from "../styles/globalstyle";
const Header = dynamic(() => import("./Header"), {
  ssr: false,
});
const Main = dynamic(() => import("./Main"), {
  ssr: false,
});

const CartShopping = dynamic(() => import("./CartShopping"), {
  ssr: false,
});

import dynamic from "next/dynamic";
import Footer from "./Footer";
import { Global } from "../src/interface/Global";


const Home: React.FC<Global> = ({
  item,
  handleAddItem,
  cartTotal,
  produtos,
}) => {
  return (
    <>
      <GlobalStyle />
      <Header />
        <Main
        description={undefined}
        total={cartTotal}  
      />
      <CartShopping
        item={item}
      />
      <Footer />
    </>
  );
};

export default Home;
