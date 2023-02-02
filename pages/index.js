import Head from 'next/head'
import courses from '../database'
import styles, { Logo, Navigation, SubLogo, ButtonContainerNavigation, NavigationButton, MainContainer, ContentContainer, Conteudo, FooterContainer, FooterText, AbaCart, Products, TextProducts, BuyProducts, DescriptionProducts, PriceProducts, AbaTitle, OpeningAndClosing, SelectedItems, Items, ItemsTitle } from '@/styles/style.jsx'
import styled from 'styled-components'
import { GlobalStyle } from '@/styles/globalStyle'
import { IconName, FaCcVisa, FaCartPlus, FaToggleOn, FaAngleDoubleRight } from "react-icons/fa";
import { BsAlarm, MdLocalAtm, BsGrid3X2GapFill, VscAccount } from "react-icons/bs";
import dynamic from 'next/dynamic'

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation>
        <Logo>
          EMPRESA
          <SubLogo>
            Anônima
          </SubLogo>
        </Logo>
        <ButtonContainerNavigation>
          <NavigationButton>
            <FaCartPlus />
          </NavigationButton>
        </ButtonContainerNavigation>
      </Navigation>

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

      <AbaCart>
        <AbaTitle>
          Carrinho de compras
          <OpeningAndClosing>
            <FaAngleDoubleRight />
          </OpeningAndClosing>
        </AbaTitle>

        <SelectedItems>
          <Items />
          <ItemsTitle>
            Apple Watch Series 4 GPS
          </ItemsTitle>
        </SelectedItems>

        <SelectedItems />
        <SelectedItems />
      </AbaCart>

      <FooterContainer>
        <FooterText>
          EMPRESA XxX com todos os direitos reservados
        </FooterText>
      </FooterContainer>
    </>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })


