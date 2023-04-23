import PropTypes from 'prop-types';
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
          <AvatarUser width={80} src={avatar} alt={user} />
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
  follow: PropTypes.arrayOf(PropTypes.bool),
  handleChangeFollowers: PropTypes.func,
};
