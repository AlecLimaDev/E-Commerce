/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Navigation,
  Logo,
  SubLogo,
  ButtonContainerNavigation,
  NavigationButton,
  Button,
  CheckoutContainer,
  ButtonRemove,
  ButtonPlus,
} from "../Header/styles";

// import { FaCartPlus } from "react-icons/fa";
import React, { useState } from "react";

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
  { url: "/AppleWatch.jpg", id: 1, title: "Apple Watch serie 6", price: 8745 },
  { url: "/KitCamisas.jpg", id: 2, title: "Kit de Camisa básica", price: 220 },
  { url: "/AirJordan.Jpg", id: 3, title: "Tênis Jordan", price: 120.99 },
];

const Header = () => {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);
  const [burguer_class, setBurguerClass] = useState("burguer-bar uncliked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

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
      setShoppingCart(newShoppingCart);
      return;
    }

    // {SE TIVER UM ÚNICO ITEM COM ID NO CARRINHO}
    const newShoppingCart: IShoppingCartItem[] = shoppingCart.filter(
      (item) => item.product.id !== id
    );
    setShoppingCart(newShoppingCart);
  };

  const restart = () => {
    setShoppingCart([]);
  };

  const totalCart = shoppingCart.reduce((total, current) => {
    return total + current.product.price * current.quantity;
  }, 0);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurguerClass("burguer-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurguerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <Navigation>
      <Logo>
        Mini
        <SubLogo>Ecommerce</SubLogo>
      </Logo>

      <ButtonContainerNavigation>
        <NavigationButton>
          <div className="burguer-menu" onClick={updateMenu}>
            <div className={burguer_class}></div>
            <div className={burguer_class}></div>
            <div className={burguer_class}></div>
          </div>
          <div className={menu_class}>
            <p>LOJA</p>
            <p className="closed">X</p>
            {miniLoja.map((book) => (
              // eslint-disable-next-line react/jsx-key
              <div className="SelectedItems">
                <div className="Items">
                  <img src={book.url} alt="photo" />
                </div>
                <div className="ItemsTitle">{book.title}</div>
                <ButtonRemove>
                  <button
                    className="ButtonMinus"
                    onClick={() => handleRemoveFromCart(book.id)}
                  >
                    --
                  </button>
                </ButtonRemove>
                {shoppingCart.map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <span>{item.quantity}</span>
                ))}
                <ButtonPlus>
                  <button
                    className="ButtonPlus"
                    onClick={() => handleAddToCart(book.id)}
                  >
                    +
                  </button>
                </ButtonPlus>
                <div className="Price">R${totalCart}</div>
                <div className="ButtonRemove" onClick={restart}>
                  X
                </div>
              </div>
            ))}
            {/* <CheckoutContainer>
              <h1>Finalizar Compra</h1>
            </CheckoutContainer> */}
          </div>
        </NavigationButton>
      </ButtonContainerNavigation>
    </Navigation>
  );
};

export default Header;
