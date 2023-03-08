import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { AbaCartProps, ButtonProps, ItemsProp, TitleProps } from "./types";



  
  export const AbaCart: FunctionComponent<AbaCartProps> = styled.div`
    position: absolute;
    width: 33%;
    height: 100%;
    left: 72%;
    top: 0px;
    background: #0f52ba;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  `;
  
  export const AbaTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 36px;
    margin-left: 10px;
    color: #fff;
    display: inline-flex;
    gap: 10%;
    align-items: center;
  `;
  export const OpeningAndClosing = styled.div`
    background: #000;
    height: 38px;
    width: 38px;
    z-index: 3;
    /* left: 75%; */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  
    @media (max-width: 463px) {
  
     display: inline-flex;
      width: 68px;
      height: 58px;
      margin-right: 20%;
    }
  `;
  
  type PropsItems = {
    children: ReactNode;
  };
  
  export const SelectedItems = styled.div`
    width: 83%;
    height: 95px;
    background-color: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    transform: translate(1%, 66%);
    margin-top: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    flex: row wrap;
    @media (max-width: 544px) {
      width: 95%;
    }
  `;
  
  export const Items: FunctionComponent<ItemsProp> = styled.div`
    margin-left: 5px;
  
  img {
    width: 46px;
    height: 57px;
    }
  
    @media (max-width: 761px) {
      img {
        display: none;
      }
    }
  `;
  

  export const ItemsTitle: FunctionComponent<TitleProps> = styled.div`
    font-weight: 700;
    font-size: 13px;
    font-family: sans-serif;
    flex-flow: row wrap;
  
    @media (max-width: 545px){
      font-size: 6px;
    }
  `;
  

  export const Button:React.FC<ButtonProps> = styled.button`
    border: none;
    cursor: pointer;
    background-color: #ddd;
    border-radius: 80%;
    padding: 2px;
    &:hover {
      background-color: aliceblue;
    }
    &:active {
      background: none
    }
  `;
  
  export const ButtonRemove:React.FC<ButtonProps> = styled.button`
    border: none;
    cursor: pointer;
   
    border-radius: 80%;
    padding: 2px;
  
    &:hover {
      background-color: red;
    }
  `;
  
  export const Price = styled.span`
    font-weight: bold;
    font-size: 17px;
    font-family: sans-serif;
  
    @media(max-width: 775px) {
      font-size: 10px;
    }
  `;
  
  export const CheckoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    width: 100%;
    height: 97px;
    top: 95%;
    cursor: pointer;
    position: absolute;
  `;
  
  export const TotalPurchase = styled.div`
    display: inline-flex;
    position: absolute;
    bottom: 7%;
    left: 37%;
  `;
  
  export const Value = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  
    @media (max-width: 530px) {
      font-size: 14px;
    }
  `;
  
  export const CheckoutButton = styled.h1`
    font-weight: 700;
    font-size: 18px;
    color: #fff;
    text-align: center;
  `;