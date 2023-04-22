import { formatNumber } from 'auxiliary/formatNumber';
import {
  CardUser,
  ThumbImg,
  AvatarUser,
  WrapContent,
  DeskTitle,
  Btn,
} from './TweetItem.styled';

export const TweetItem = ({ users, follow, handleChangeFollowers }) => {
  return users.map(({ id, avatar, user, tweets, followers }, idx) => {
    return (
      <CardUser key={id}>
        <ThumbImg>
          <AvatarUser src={avatar} alt={user} />
        </ThumbImg>
        <WrapContent>
          <DeskTitle>{tweets} tweets</DeskTitle>
          <DeskTitle>{formatNumber(followers)} followers</DeskTitle>
        </WrapContent>
        <Btn
          followed={follow[idx]}
          onClick={() => handleChangeFollowers(id, followers, follow[idx], idx)}
        >
          {follow[idx] ? 'Following' : 'Follow'}
        </Btn>
      </CardUser>
    );
  });
};
