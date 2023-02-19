
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
    ButtonRemove
} from '@/styles/style'

import { FaAngleDoubleRight } from 'react-icons/fa'

import React from 'react'

const CartShopping = () => {
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

                    <CheckoutButton>
                        Finalizar Compra
                    </CheckoutButton>
                </CheckoutContainer>

                <TotalPurchase>
                    <Value>
                        TOTAL: R$750
                    </Value>
                </TotalPurchase>



                <SelectedItems>
                    <Items />
                    <ItemsTitle>
                        Apple Watch Series 4 GPS sahusa
                    </ItemsTitle>
                    <Button><box-icon name='minus'></box-icon></Button>
                    <span>2</span>
                    <Button><box-icon name='plus'></box-icon></Button>
                    <Price>R$595</Price>
                    <ButtonRemove><box-icon type='solid' name='x-circle'></box-icon></ButtonRemove>

                </SelectedItems>

            </AbaCart>
        </div>
    )
}

export default CartShopping