/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import React, {  useState } from "react";

import {
  MainContainer,
  ContentContainer,
  Products,
  TextProducts,
  PriceProducts,
  DescriptionProducts,
  BuyProducts,
} from '../Main/styles';

import { FaCcVisa } from "react-icons/fa" 
import { AiOutlineMinus, AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";

interface ILoja {
  url?: string;
  id: number;
  title: string;
  price: number;
  name: string;
  category: string;
}

interface IShoppingCartItem {
  [x: string]: any;
  product: ILoja;
  quantity: number;
}

const Loja: ILoja[] = [
  { url: '/Applewatch.jpg', id: 1, title: "IPhone 14 Plus", price: 8745, name: "Apple Watch Series 6", category: "O Apple Watch Series 6 tem resistência a 50 metros à água." },
  { url: '/KitCamisas.jpg', id: 2, title: "", price: 220, name: "Kit de Camisetas básicas", category: "Para os apaixonados em um visual mais Clean e Sofisticado." },
  { url: '/AirJordan.jpg',  id: 3, title: "Apple Watch", price: 120, name: "AirJordan", category: "Nike Air Jordan, o tênis que revolucionou o marketing esportivo." },
];


const Main = () => {

  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);


  const handleAddToCart = (id: number) => {
   
    const book = Loja.find((book) => book.id === id);
    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    );
    // {SE OS ITENS ESTIVEREM NO SHOPPING CART}
    if (alreadyInShoppingCart) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
        if (item.product.id === id)
          ({
            ...item,
            quantity: item.quantity++,
          });
        return item;
      });
      setShoppingCart(newShoppingCart);
      return;
    }

    // {SE OS ITENS NÃO ESTIVEREM NO SHOPPING CART}
    const cartItem: IShoppingCartItem = {
      product: book!,
      quantity: 1,
    };
    const newShoppingCart: IShoppingCartItem[] = [...shoppingCart, cartItem];
    setShoppingCart(newShoppingCart);
  };
  
  return (
    <div>
      <MainContainer>
        {Loja.map((acessorios) => (
          <ContentContainer data={acessorios}>
            <Products>
            <img src={acessorios.url} alt="" />
            </Products>
            <TextProducts>
              {acessorios.name}
              <PriceProducts>R${acessorios.price}</PriceProducts>
            </TextProducts>
            <DescriptionProducts>{acessorios.category}</DescriptionProducts>
            <BuyProducts onClick={() => handleAddToCart(acessorios.id)}>
              COMPRAR
              <FaCcVisa />
            </BuyProducts>
          </ContentContainer>
        ))}
        {Loja.length === 0 && <div>Atualmente a Loja está vazia</div>}
      </MainContainer>
    </div>
  );
}

export default Main;
