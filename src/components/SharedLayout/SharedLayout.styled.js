import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid #8080802b;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
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
  color: black;
  padding: 10px;
  font-weight: 200;
  &.active {
    color: #04a0e0;
    border: 1px solid #04a0e0;
    border-radius: 4px;
    font-weight: 500;
  }
`;
