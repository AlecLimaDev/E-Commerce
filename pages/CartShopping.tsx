import { useState, useEffect } from "react";
import {api} from '../src/services/api'

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


const CartShopping: React.FC = () => {

  const [cart, setCart] = useState([1,2,3])

  useEffect(() => {
    api.get('/cart').then((data) => console.log(data))
  }, [])

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
          <Value>TOTAL: R$750</Value>
        </TotalPurchase>

        <SelectedItems>
          <Items />
          <ItemsTitle>Apple Watch Series 4 GPS sahusa</ItemsTitle>
          <Button>
            <AiOutlineMinus style={{ display: 'flex' }} />
          </Button>
          <span>2</span>
          <Button>
            <AiOutlinePlus style={{ display: 'flex' }} />
          </Button>
          <Price>R$595</Price>
          <ButtonRemove>
            <AiFillCloseCircle style={{ display: 'flex' }} />
          </ButtonRemove>
        </SelectedItems>
      </AbaCart>
    </div>
  );
};

export default CartShopping;
