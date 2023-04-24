import PropTypes from 'prop-types';
import { markup } from 'auxiliary/markup';

export const TweetItem = ({
  users,
  follow,
  handleChangeFollowers,
  selectedOption,
}) => {
  return markup(users, follow, handleChangeFollowers, selectedOption);
};

TweetItem.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      user: PropTypes.string,
      tweets: PropTypes.number,
      followers: PropTypes.number,
    })
  ),
  follow: PropTypes.arrayOf(PropTypes.object),
  handleChangeFollowers: PropTypes.func,
  selectedOption: PropTypes.string,
};
