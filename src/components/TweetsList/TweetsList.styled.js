import styled from 'styled-components';

export const UserCard = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (min-width: 500px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
