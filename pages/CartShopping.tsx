
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
  AiFillDatabase,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";


const CartShopping = ({data}) => {

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

        <SelectedItems data={data}>
          <Items />
          <ItemsTitle>Apple Watch Series 4 GPS sahusa</ItemsTitle>
          <Button>
            <AiOutlineMinus style={{ display: "flex" }} />
          </Button>
          <span>2</span>
          <Button>
            <AiOutlinePlus style={{ display: "flex" }} />
          </Button>
          <Price>R$595</Price>
          <ButtonRemove>
            <AiFillCloseCircle style={{ display: "flex" }} />
          </ButtonRemove>
        </SelectedItems>
      </AbaCart>
    </div>
  );
};

export default CartShopping;
