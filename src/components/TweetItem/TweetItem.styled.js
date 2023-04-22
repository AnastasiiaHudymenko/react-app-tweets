import styled from 'styled-components';
import bg from 'images/picture.png';
import ellips from 'images/Ellipse.png';
import regt from 'images/Rectangle.png';
import logo from 'images/Logo.png';

export const CardUser = styled.li`
  background-image: url('${logo}'), url('${bg}'), url('${ellips}'),
    url('${regt}'),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px, 260px, 113px, 380px, 380px;
  background-repeat: no-repeat;
  background-position: 20px 20px, right 80px top 45px, left 134px top 168px,
    center center, 0px 0px, center center;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 380px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding-bottom: 36px;
  padding-top: 178px;
`;

export const ThumbImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const AvatarUser = styled.img`
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 26px 0;
`;

export const DeskTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Btn = styled.button`
  background-color: ${props => (props.followed ? ' #5CD3A8' : ' #ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  padding: 14px 28px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${props => (props.followed ? ' #5CD3A8' : ' #ebd8ff')};
  }
`;
// export const MainContainetContent = styled.div`
//   position: absolute;
//   border: 8px solid #ebd8ff;
//   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
//     inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
//   width: 96%;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -80%);
// `;
