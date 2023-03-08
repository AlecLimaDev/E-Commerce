import { ReactNode } from 'react';
export interface AbaCartProps {
    children?: any;
  }



  export interface ItemsProp {
    data?: "product" | "price" | "category" | "qtd" | "name";
    name?: String;
    children?: ReactNode;
  }


  export interface TitleProps {
    produtos?: any;
    price?: any;
    children?: React.ReactNode;
  }


  export interface ButtonProps {
    Button?: "button" | "submit" | "reset";
    onClick?: any
    children?: any
  }