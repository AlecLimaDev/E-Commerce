import React from 'react'
import dynamic from 'next/dynamic'
import { GlobalStyle } from '@/styles/globalStyle'
import Header from './Header'
import Main from './Main'
import CartShopping from './CartShopping'
import Footer from './Footer'


const DynamicHeader = dynamic(() => import('/pages/index'), {
  ssr: false,
})


const Home = () => {
  return (
    <>
        <GlobalStyle />
        <Header />
        <Main />
        <CartShopping />
        <Footer />
    </> 
  )
}

export default Home