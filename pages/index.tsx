import React from "react";
import { GlobalStyle } from "../styles/globalstyle";
import Header from "./Header";
import Main from "./Main";
import CartShopping from "./CartShopping";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { api } from "../src/services/api";
import { SelectedItems } from "../styles/style";

const Home: React.FC = () => {
  const productObject = {
    name: "produto",
    category: "categoria",
    price: 100,
    qtd: 1,
  };

  const [cart, setCart] = useState([]);

  const fetchData = () => {
    api.get("/cart").then((response) => setCart(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddItem = () => {
    console.log("Disparou handleAddItem");

    api.post("/cart", productObject).then((response) => console.log(response));
    fetchData();
  };

  const hanleRemoveItem = () => {};

  const hanleUpdateItem = () => {};

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <CartShopping data="data" />
      <button onClick={handleAddItem}>TESTANDO</button>
      {cart.map((item, data) => {
        <SelectedItems data={data} />;
      })}
      <Footer />
    </>
  );
};

export default Home;
