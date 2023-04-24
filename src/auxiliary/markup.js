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
  const filteredFollow =
    selectedOption === 'Follow'
      ? follow.filter(user => !user.isFollow)
      : selectedOption === 'Following'
      ? follow.filter(user => user.isFollow)
      : selectedOption === 'All'
      ? follow
      : users;

  return filteredFollow.map(
    ({ id, avatar, user, tweets, followers, isFollow }, idx) => {
      const resultFollow =
        isFollow === undefined ? follow[idx]?.isFollow : isFollow;
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
            followed={resultFollow}
            onClick={() =>
              handleChangeFollowers(id, followers, resultFollow, idx)
            }
          >
            {resultFollow ? 'Following' : 'Follow'}
          </Btn>
        </CardUser>
      );
    }
  );
};
