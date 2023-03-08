import { MainProps } from './types';
import styled from "styled-components";

export const MainContainer:React.FC<MainProps> = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  height: 75vh;
  gap: 20px;
  position: relative;
  top: 20px;
`;

export const ContentContainer: React.FC<MainProps> = styled.div`
  width: 217.56px;
  height: 285px;
  background-color: #fff;
  display: grid;
  align-items: center;
  padding-top: 18px;
  position: relative;
  place-items: center;
  border-radius: 8px;

  @media (max-width: 435px) {
    width: 50%
  }
`;

export const PriceProducts = styled.div`
  background: #373737;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  width: 74px;
  display: grid;
  place-items: center;
  height: 20px;
  position: relative;
  padding: 2px;
  margin-right: 16px;
`;

export const Products = styled.div`
  position: sticky;
  display: flex;
  align-items: center;


  img {
    width: 120px;
    height: 140px;
  }
`;

export const TextProducts = styled.h3`
  font-size: 16px;
  color: #2c2c2c;
  position: relative;
  display: inline-flex;
  gap: 2px;
  margin-left: 12px;
`;

export const DescriptionProducts = styled.p`
  position: relative;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 300;
  text-align: center;
  color: #2c2c2c;
`;

export const BuyProducts = styled.button`
  width: 100%;
  height: 35px;
  background: #0f52ba;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  gap: 9px;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Montserrat";
  font-weight: 600;
  color: #fff;
  top: 10px;
  cursor: pointer;
`;