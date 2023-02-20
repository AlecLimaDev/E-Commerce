import React from 'react'

import {
    MainContainer,
    ContentContainer,
    Products,
    TextProducts,
    PriceProducts,
    DescriptionProducts,
    BuyProducts
} from '../styles/style'

import { FaCcVisa } from 'react-icons/fa'



const Main: React.FC = () => {
    return (
        <>
            <MainContainer>
                <ContentContainer>
                    <Products />
                    <TextProducts>
                        Apple Watch modelo de exemplo
                        <PriceProducts>
                            R$754
                        </PriceProducts>
                    </TextProducts>
                    <DescriptionProducts>
                        Descrição do produto
                    </DescriptionProducts>
                    <BuyProducts>
                        <FaCcVisa />  COMPRAR
                    </BuyProducts>
                </ContentContainer>

                <ContentContainer>
                    <Products />
                    <TextProducts>
                        Apple IphoneX 128GB
                        <PriceProducts>
                            R$754
                        </PriceProducts>
                    </TextProducts>
                    <DescriptionProducts>
                        Descrição do produto
                    </DescriptionProducts>
                    <BuyProducts>
                        <FaCcVisa />  COMPRAR
                    </BuyProducts>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

export default Main