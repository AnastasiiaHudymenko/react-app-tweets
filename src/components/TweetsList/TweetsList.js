import { TweetItem } from '../TweetItem/TweetItem';

export const TweetsList = ({ users, handleChangeFollowers, follow }) => {
  return (
    <ul>
      <TweetItem
        handleChangeFollowers={handleChangeFollowers}
        follow={follow}
        users={users}
      />
    </ul>
  );
};
