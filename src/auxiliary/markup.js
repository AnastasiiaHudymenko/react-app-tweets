import { formatNumber } from 'auxiliary/formatNumber';
import {
  CardUser,
  ThumbImg,
  AvatarUser,
  WrapContent,
  DeskTitle,
  Btn,
} from 'components/TweetItem/TweetItem.styled';

export const markup = (
  users,
  follow,
  handleChangeFollowers,
  selectedOption
) => {
  if (selectedOption === 'Follow') {
    const followUsers = follow.filter(user => !user.isFollow);
    return followUsers.map(
      ({ id, avatar, user, tweets, followers, isFollow }, idx) => {
        return actualMarkup(
          id,
          avatar,
          user,
          tweets,
          followers,
          isFollow,
          idx,
          handleChangeFollowers
        );
      }
    );
  }
  if (selectedOption === 'Following') {
    const followUsers = follow.filter(user => user.isFollow);
    return followUsers.map(
      ({ id, avatar, user, tweets, followers, isFollow }, idx) => {
        return actualMarkup(
          id,
          avatar,
          user,
          tweets,
          followers,
          isFollow,
          idx,
          handleChangeFollowers
        );
      }
    );
  }
  if (selectedOption === 'All') {
    return follow.map(
      ({ id, avatar, user, tweets, followers, isFollow }, idx) => {
        return actualMarkup(
          id,
          avatar,
          user,
          tweets,
          followers,
          isFollow,
          idx,
          handleChangeFollowers
        );
      }
    );
  }
  if (selectedOption === '') {
    return users.map(({ id, avatar, user, tweets, followers }, idx) => {
      return actualMarkup(
        id,
        avatar,
        user,
        tweets,
        followers,
        follow[idx]?.isFollow,
        idx,
        handleChangeFollowers
      );
    });
  }
};
const actualMarkup = (
  id,
  avatar,
  user,
  tweets,
  followers,
  isFollow,
  idx,
  handleChangeFollowers
) => {
  console.log('hello');
  return (
    <CardUser key={id}>
      <ThumbImg>
        <AvatarUser width={80} src={avatar} alt={user} />
      </ThumbImg>
      <WrapContent>
        <DeskTitle>{tweets} tweets</DeskTitle>
        <DeskTitle>{formatNumber(followers)} followers</DeskTitle>
      </WrapContent>
      <Btn
        followed={isFollow}
        onClick={() => handleChangeFollowers(id, followers, isFollow, idx)}
      >
        {isFollow ? 'Following' : 'Follow'}
      </Btn>
    </CardUser>
  );
};
