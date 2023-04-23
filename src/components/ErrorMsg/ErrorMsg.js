import PropTypes from 'prop-types';
import { ErrContainer, ErrTitle, ErrImg } from 'globalStyles/Global.styled';
import errorImg from 'images/speech-bubble.png';

export const ErrorMsg = ({ errMsg }) => {
  return (
    <ErrContainer>
      <ErrImg src={errorImg} alt="Error" />
      <ErrTitle>{errMsg}</ErrTitle>
    </ErrContainer>
  );
};

ErrorMsg.propTypes = {
  errMsg: PropTypes.string,
};
