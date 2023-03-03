/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

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
import { Global } from "../src/interface/Global";

// export interface IProdutos {
//   name: string;
//   category: string;
//   price: number;
//   qtd: number;
// }

const Main: React.FC<Global> = ({}) => {
  const [cart, setCart] = useState([]);

  const precoAleatorio = (valorMinimo, valorMaximo) => {
    return Math.floor(
      Math.random() * (valorMaximo - valorMinimo) + valorMinimo
    );
  };

  const productObject: any = {
    name: "Produto",
    category: "Categoria",
    price: precoAleatorio(971, 8473),
    qtd: 1,
  };

  const fetchData = () => {
    api.get("/cart").then((response) => setCart(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddItem = () => {
    alert("Ok. Está sendo clicado");
    api.post("/cart", productObject).then((response) => {
      console.log(response);
      fetchData();
    });
  };

  const handleUpdateItem = (item, action) => {
    let novaQuantidade = item.qtd;

    if (action === "diminuir") {
      if (novaQuantidade === 1) return;
      novaQuantidade -= 1;
    }
    if (action === "aumentar") {
      novaQuantidade += 1;
    }
    console.log(handleUpdateItem);
    const newData = { ...item, qtd: novaQuantidade };
    delete newData._id;

    console.log({ newData });
    api.put(`/cart/${item._id}`, newData).then((response) => {
      console.log({ response });
      fetchData();
    });
  };

  const getTotal = () => {
    let sum = 0;

    console.log("Todas as Requisições");

    for (let item of cart) {
      sum += item.price * item.qtd;
    }
    console.log(sum);
    return sum;
  };

  const cartTotal = getTotal();

  return (
    <>
      <MainContainer handleUpdateItem={handleUpdateItem} calculo={cartTotal} produtos={productObject}>
        {cart.map((item) => (
          <ContentContainer data={item} key={item._id}>
            <Products>
              <img src="https://picsum.photos/120/130" alt="foto" />
            </Products>
            <TextProducts>
              {item.name}
              <PriceProducts>R${item.price}</PriceProducts>
            </TextProducts>
            <DescriptionProducts>{item.category}</DescriptionProducts>
            <BuyProducts onClick={handleAddItem}>
              COMPRAR
              <FaCcVisa>TESTANDO</FaCcVisa>
            </BuyProducts>
          </ContentContainer>
        ))}
        {cart.length === 0 && <div>Atualmente a Loja está vazia</div>}
      </MainContainer>
    </>
  );
};

export default Main;
