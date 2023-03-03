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
} from "../styles/style";

import { FaAngleDoubleRight } from "react-icons/fa";

import {
  AiFillCloseCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useState } from "react";
import Main from "./Main";

interface CartShoppingProps {
  item: any;
  calculo?: string | number
}

const CartShopping = (props) => {
  const [shoppingCart, setShoppingCart] = useState<any>([])

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
          <Value></Value>
        </TotalPurchase>

        <SelectedItems>
          <Items>
            <img src="https://picsum.photos/46/57" alt="foto" />
          </Items>
          <ItemsTitle> </ItemsTitle>
          <Button
            
          >
            <AiOutlineMinus style={{ display: "flex" }} />
          </Button>
          <span>15 </span>
          <Button
            onClick={() => null}
          >
            <AiOutlinePlus style={{ display: "flex" }} />
          </Button>
          <Price>R$ </Price>
          <ButtonRemove
            onClick={() => null}
          >
            <AiFillCloseCircle style={{ display: "flex" }} />
          </ButtonRemove>
        </SelectedItems>
      </AbaCart>
    </div>
  );
};

export default CartShopping;
