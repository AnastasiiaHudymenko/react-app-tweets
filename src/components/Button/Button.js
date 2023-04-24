import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ getPage, loaded, users, selectedOption }) => {
  const handleClickLoadMore = () => {
    getPage();
  };
  const isShowBtn =
    selectedOption !== '' ? 'none' : users.length !== 26 ? 'block' : ' none';
  return (
    <ButtonLoadMore
      style={{
        display: isShowBtn,
      }}
      onClick={handleClickLoadMore}
      type="button"
    >
      {loaded ? 'Loading...' : 'Load more'}
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  users: PropTypes.array,
  getPage: PropTypes.func,
  loaded: PropTypes.bool,
  selectedOption: PropTypes.string,
};
