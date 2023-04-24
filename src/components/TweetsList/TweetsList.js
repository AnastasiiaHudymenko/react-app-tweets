import PropTypes from 'prop-types';
import { TweetItem } from '../TweetItem/TweetItem';
import { UserCard } from './TweetsList.styled';

export const TweetsList = ({
  users,
  handleChangeFollowers,
  follow,
  selectedOption,
}) => {
  return (
    <UserCard>
      <TweetItem
        selectedOption={selectedOption}
        handleChangeFollowers={handleChangeFollowers}
        follow={follow}
        users={users}
      />
    </UserCard>
  );
};

TweetsList.propTypes = {
  users: PropTypes.array,
  follow: PropTypes.array,
  handleChangeFollowers: PropTypes.func,
  selectedOption: PropTypes.string,
};
