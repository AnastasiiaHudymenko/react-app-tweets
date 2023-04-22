import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ContainerSpinner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const ErrContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const ErrTitle = styled.p`
  font-size: 30px;
  color: #ae5757;
`;

export const ErrImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const Section = styled.section`
  padding: 40px;
`;

export const StyledLink = styled(Link)`
  color: #04a0e0;
  border: 1px solid #04a0e0;
  border-radius: 4px;
  font-weight: 500;
  padding: 10px;
  margin-bottom: 25px;
  display: inline-block;
`;
