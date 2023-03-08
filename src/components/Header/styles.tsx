import styled from "styled-components";

export const Navigation = styled.nav`
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
  border-radius: 12px;
  width: 100px;
  height: 52px;
  background-color: azure;
`;
