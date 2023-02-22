import styled from "styled-components";
import { FunctionComponent, ReactNode } from "react";

export const Navigation = styled.nav`
    height: 75px;
    background: #0F52BA;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.a`

    color: white;
    font-weight: 600;
    font-size: 32px;
    padding-left: 17px;
`

export const SubLogo = styled.a`
    color: white;
    font-weight: 300;
    font-size: 25px;
    padding-left: 7px;
`

export const ButtonContainerNavigation = styled.li`
    display: flex;
    align-items: center;
    padding-right: 17px;
`

export const NavigationButton = styled.button`
    padding: 10px;
    border-radius: 12px;
    width: 100px;
    height: 52px;
background-color: azure; 
`

export const MainContainer = styled.main`  
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row wrap;
    height: 75vh;
    gap: 20px;
    position: relative;
    top: 20px;
`

export const ContentContainer = styled.div`
     width: 217.56px;
     height: 285px;
     background-color: #fff;
     display: grid;
     align-items: center;
     padding-top: 18px; 
     position: relative;
     place-items: center;
     border-radius: 8px;
`

export const PriceProducts = styled.div`
    background: #373737;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 15px;
    width: 54px;
    display: grid;
    place-items: center;
    height: 20px;
    position: relative;
    padding: 2px;
    /* bottom: 32px;
    left: 72px; */
    margin-right: 16px;
`

export const Products = styled.img`
    width: 111px;
    height: 138px;
    background-color: aquamarine;
    position: relative;
`

export const TextProducts = styled.h3`
    font-size: 16px;
    color: #2C2C2C;
    position: relative;
    /* transform: translate(-15%, -20%); */
    /* display: grid;
    place-items: center; */
    display: inline-flex;
    gap: 2px;
    margin-left: 12px;
`

export const DescriptionProducts = styled.p`
    position: relative;
    font-size: 10px;
    font-family: 'Montserrat';
    font-weight: 300;
    transform: translate(3%, -50%);
    color: #2C2C2C;
`

export const BuyProducts = styled.button`
    width: 100%;
    height: 35px;
    background: #0F52BA;
    border-radius: 0px 0px 8px 8px;
    display: flex; 
    gap: 9px;
    justify-content: center;
    align-items: center;
    position: relative;
    font-family: 'Montserrat';
    font-weight: 600;
    color: #fff;
    top: 10px;
    `


export const FooterContainer = styled.div`
    max-width: 100%;
    height: 7vh;
    background: #EEEEEE;
    display: flex;
    margin-top: 8%;
    align-items: center;
`


export const FooterText = styled.p`
    width: 100%;
    text-align: center;
`

export const AbaCart = styled.div`
    position: absolute;
    width: 33%;
    height: 100%;
    left: 72%;
    top: 0px;
    background: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`

export const AbaTitle = styled.h1`
    font-size: 27px;
    font-weight: 700;
    padding-top: 36px;
    padding-left: 47px;
    color: #fff;
    display: inline-flex;
    align-items: center;
`
export const OpeningAndClosing = styled.div`
    position: absolute;
    background: #000;
    height: 38px;
    width: 38px;
    left: 70%;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
`

interface PropsItems {
    data?: any;
    name?: String;
    children?: ReactNode;
}

export const SelectedItems:FunctionComponent<PropsItems> = styled.table`
    width: 83%;
    height: 95px;
    background-color: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    transform: translate(1%, 66%);  
    margin-top: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    flex: row wrap;

`

export const Items = styled.tbody`
    width: 46px;
    height: 57px;
    background: #000;
    margin-left: 5px;
`

export const ItemsTitle = styled.tr`
    font-weight: 700;
    font-size: 13px;
    font-family: sans-serif;
    flex-flow: row wrap;
`

export const Button = styled.button`
    border: none;
    cursor: pointer;
    background-color: #ddd;
    border-radius: 80%;
    padding: 2px;
    &:hover {
        background-color: aliceblue;
    }
`

export const ButtonRemove = styled.button`
    border: none;
    cursor: pointer;
    background: none;
    border-radius: 80%;
    padding: 2px;

    &:hover {
        background-color: red;
    }
`

export const Price = styled.span`
font-weight: bold;
font-size: 17px;
font-family: sans-serif;
`

export const CheckoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    width: 100%;
    height: 97px;
    top: 95%;
    position: absolute;
`

export const TotalPurchase = styled.div`
    display: inline-flex;
    position: absolute;
    bottom: 7%;
    left: 34%;
    /* transform: translate(-120%, 50%); */
    /* gap: 42px; */
    
`

export const Value = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: 700;
   
    text-align: center;
`



 export const CheckoutButton = styled.h1`
    font-weight: 700;
    font-size: 28px;
    color: #FFF;
    /* margin-right: 53px; */
    text-align: center;
` 