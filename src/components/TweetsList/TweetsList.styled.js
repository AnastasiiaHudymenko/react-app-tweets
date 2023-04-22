import styled from 'styled-components';

export const UserCard = styled.ul`
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
  @media screen and (min-width: 500px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

//  display: flex;
//   @media screen and (min-width: 768px) {
//     flex-basis: calc((100% - 30px) / 2);
//   }

//   @media screen and (min-width: 1200px) {
//     flex-basis: calc((100% - 60px) / 3);
//   }

// const UserImage = styled.img`
//   width: 100%;
//   height: auto;
//   margin-bottom: 10px;
// `;

// const UserCardTitle = styled.p`
//   font-size: 20px;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const UserCardDescription = styled.p`
//   font-size: 16px;
//   color: #666;
// `;
