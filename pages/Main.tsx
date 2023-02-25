/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";

import {
  MainContainer,
  ContentContainer,
  Products,
  TextProducts,
  PriceProducts,
  DescriptionProducts,
  BuyProducts,
} from "../styles/style";

import { FaCcVisa } from "react-icons/fa";
import { api } from "../src/services/api";

type Props = {
  data?: Array<string> | Array<number>
};

const Main = ({ data }: Props) => {
    const [cart, setCart] = useState([]);

  const fetchData = () => {
    api.get("/cart").then((response) => setCart(response.data));
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <MainContainer>
      {cart.map((item) => (
         <ContentContainer>
         <Products>
           <img src="https://picsum.photos/120/130" alt="foto" />
         </Products>
         <TextProducts>
           <PriceProducts>R$ </PriceProducts>
         </TextProducts>
         <DescriptionProducts></DescriptionProducts>
         <BuyProducts>
           {" "}
           COMPRAR
           <FaCcVisa></FaCcVisa>
         </BuyProducts>
       </ContentContainer>
      ))}
      {cart.length === 0 && <div>Carrinho vazio</div>}
      </MainContainer>
    </>
  );
};

export default Main;
