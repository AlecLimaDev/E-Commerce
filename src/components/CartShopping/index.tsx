/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-key */
import {
  AbaCart,
  AbaTitle,
  OpeningAndClosing,
  CheckoutContainer,
  CheckoutButton,
  TotalPurchase,
  Value,
  SelectedItems,
  Items,
  ItemsTitle,
  Button,
  Price,
  ButtonRemove,
} from "../CartShopping/styles"
import { FaAngleDoubleRight } from "react-icons/fa";

import {
  AiFillCloseCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useState } from "react";
import React from "react";

interface ILoja {
  url?: any;
  id: number;
  title: string;
  price: number;
}

interface IShoppingCartItem {
  product: ILoja;
  quantity: number;
}

const miniLoja: ILoja[] = [
  { url: '/AppleWatch.jpg', id: 1, title: "Apple Watch serie 6", price: 8745 },
  { url: '/KitCamisas.jpg', id: 2, title: "Kit de Camisa básica", price: 220 },
  { url: '/AirJordan.Jpg',  id: 3, title: "Tênis Jordan", price: 120.99 },
];

const CartShopping = () => {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);
  
 

  

  const handleAddToCart = (id: number) => {
    const book = miniLoja.find((book) => book.id === id);
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

  const handleRemoveFromCart = (id: number) => {
    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    );

    if (alreadyInShoppingCart!.quantity > 1) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
        if (item.product.id === id)
          ({
            ...item,
            quantity: item.quantity--,
          });
        return item;
      });
      setShoppingCart(newShoppingCart)
      return
    }

    // {SE TIVER UM ÚNICO ITEM COM ID NO CARRINHO}
    const newShoppingCart: IShoppingCartItem[] = shoppingCart.filter(
      (item) => item.product.id !== id
    );
    setShoppingCart(newShoppingCart);
  };

  const totalCart = shoppingCart.reduce((total, current) => {
    return total + (current.product.price * current.quantity)
  }, 0)

  
  
  return (
    
    <div>
      <AbaCart>
        <AbaTitle>
          Carrinho de compras
          <OpeningAndClosing>
            <FaAngleDoubleRight />
          </OpeningAndClosing>
        </AbaTitle>

        <CheckoutContainer>
          <CheckoutButton>Finalizar Compra</CheckoutButton>
        </CheckoutContainer>

        <TotalPurchase>
          <Value>R${totalCart}</Value>
        </TotalPurchase>

        {miniLoja.map((book) => (
          <SelectedItems>
          <Items>
            <img src={book.url} alt="" />
          </Items>
          <ItemsTitle>{book.title} </ItemsTitle>
          <Button
            onClick={() => handleRemoveFromCart(book.id)}
          >
            <AiOutlineMinus style={{ display: "flex" }} />
          </Button>
          {shoppingCart.map((item) => (
            <span>{item.quantity}</span>
          ))}
          <Button
            onClick={() => handleAddToCart(book.id)}
          >
            
            <AiOutlinePlus style={{ display: "flex" }} />
          </Button>
          <Price>R${totalCart}</Price>
          <ButtonRemove
            onClick={() => null}
          >
            <AiFillCloseCircle style={{ display: "flex" }} />
          </ButtonRemove>
        </SelectedItems>
        ))}
      </AbaCart>
    </div>
  );
};

export default CartShopping;
