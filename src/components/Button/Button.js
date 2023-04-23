import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ getPage, loaded, users }) => {
  const handleClickLoadMore = () => {
    getPage();
  };
  return (
    <ButtonLoadMore
      style={{ display: users.length === 26 ? 'none' : 'block' }}
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
};
