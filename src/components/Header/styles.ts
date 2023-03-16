
import styled from "styled-components";

export const Navigation = styled.nav`
width: 100%;
  height: 75px;
  background: #0f52ba;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  color: white;
  font-weight: 600;
  font-size: 32px;
  padding-left: 17px;
`;

export const SubLogo = styled.a`
  color: white;
  font-weight: 300;
  font-size: 25px;
  padding-left: 7px;
`;

export const ButtonContainerNavigation = styled.li`
  display: flex;
  align-items: center;
  padding-right: 17px;
`;

export const NavigationButton = styled.button`
  padding: 10px;
  /* border-radius: 12px; */
  width: 300px;
  background: none;
  border: none;
  height: 52px;


  h1 {
    color: white;
  }

  p {
    z-index: 9;
    position: relative;
    right: 24%;
    top: 5%;
    font-family: sans-serif;
    font-weight: 800;
    color: #fff;
  }

  .closed {
    color: black;
    position: relative;
    right: 40%;
  }

  .ButtonRemove {
    color: red;

    &:hover {
      background-color: aquamarine;
      border-radius: 50%;
    }
  }

  .burguer-menu {
    height: 100%;
    width: 8em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
  }

  .burguer-bar {
    width: 8em;
    height: 0.5em;

    border-radius: 0.5em;
    z-index: 5;
    position: absolute;
  }

  .menu {
    width: 310px;
    height: 100vh;
    background-color: #0f52ba;
    position: absolute;
    top: 0;
    z-index: 1;

    @media (max-width: 542px) {
      width: 70%;
    }

    /* @media (max-width: 667px) {
      width: 50%;
    }

    @media (max-width: 881px) {
      width: 50%;
    } */
    


  }

  .hidden {
    display: none;
  }

  .visible {
    display: inherit;
  }

  .burguer-bar.clicked:nth-child(1) {
    transform: rotate(90deg) translate(0.75em, 1.25em);
    transition: ease-in-out 0.5s;
  }

  .burguer-bar.clicked:nth-child(2) {
    transform: rotate(45deg) translate(0.75em, 1.25em);
    transition: ease-in-out 0.5s;
  }

  .burguer-bar.clicked:nth-child(3) {
    transform: rotate(125deg) translate(0.75em, 0.75em);
    transition: ease-in-out 0.5s;
  }

  .burguer-bar.uncliked {
    transform: rotate(0) translate(0);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1, 275) 0.5s;
  }

  .SelectedItems {
    width: 99%;
    margin-right: 310px;
    height: 95px;
    background-color: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 1.15);
    border-radius: 8px;
    margin-top: 55px;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    flex: row wrap;

    &:hover {
      /* transform: scale(1.23); */
      transform: translate(-20px, 12px);
    }

    /* @media (max-width: 593px) {
      width: 100%;
    } */
  }

  .Items {
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
  }

  .ItemsTitle {
    font-weight: 700;
    font-size: 13px;
    font-family: sans-serif;
    flex-flow: row wrap;

    @media (max-width: 545px) {
      font-size: 6px;
    }
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;

  &:hover {
    background-color: aliceblue;
  }
  &:active {
    background: none;
  }

  span {
    color: red;
    text-align: center;
  }

  .ButtonMinus {
    padding: 0.3em;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: aquamarine;
      border-radius: 50%;
    }
  }

  .Price {
    font-weight: bold;
    font-size: 13px;
    font-family: sans-serif;

    @media (max-width: 775px) {
      font-size: 10px;
    }
  }
`;

export const ButtonPlus = styled.button`
  padding: 0.3em;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: red;
    border-radius: 50%;
  }
`;

export const ButtonRemove = styled.button`
  padding: 0.3em;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: red;
    border-radius: 50%;
  }
`;

export const CheckoutContainer = styled.div`
  width: 100%;
  background: black;
  height: 60px;
  z-index: 4;
  display: flex;
  align-items: center;
  margin-top: 100%;
  z-index: 8;

  
  

  h1 {
    position: absolute;
    left: 33%;
    cursor: pointer;
  }
`;
