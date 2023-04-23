import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding: 10px 0;
  border-bottom: 1px solid #8080802b;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  position: fixed;
  width: 100%;
  z-index: 9999;
  background-color: #e9f0f5;
`;
export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const ListNav = styled.ul`
  display: flex;
  gap: 20px;
`;
export const ItemNav = styled.li`
  font-size: 18px;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px;
  color: rgb(142 142 142);
  padding: 10px;
  font-weight: 600;

  &.active {
    color: #04a0e0;
    border: 1px solid #04a0e0;
    border-radius: 4px;
    font-weight: 500;
  }
`;
