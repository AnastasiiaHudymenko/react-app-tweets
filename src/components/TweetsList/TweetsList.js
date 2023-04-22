import { TweetItem } from '../TweetItem/TweetItem';
import { UserCard } from './TweetsList.styled';

export const TweetsList = ({ users, handleChangeFollowers, follow }) => {
  return (
    <UserCard>
      <TweetItem
        handleChangeFollowers={handleChangeFollowers}
        follow={follow}
        users={users}
      />
    </UserCard>
  );
};
