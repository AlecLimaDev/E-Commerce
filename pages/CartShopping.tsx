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
            <AiOutlineMinus />
          </Button>
          <span>2</span>
          <Button>
            <AiOutlinePlus />
          </Button>
          <Price>R$595</Price>
          <ButtonRemove>
            <AiFillCloseCircle />
          </ButtonRemove>
        </SelectedItems>
      </AbaCart>
    </div>
  );
};

export default CartShopping;
