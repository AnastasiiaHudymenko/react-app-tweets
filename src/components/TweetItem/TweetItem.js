export const TweetItem = ({ users, follow, handleChangeFollowers }) => {
  return users.map(({ id, avatar, user, tweets, followers }, idx) => {
    return (
      <li key={id}>
        <img width={60} src={avatar} alt="user avatar" />
        <p>{user}</p>
        <p>{tweets}</p>
        <p>{followers}</p>
        <button
          onClick={() => handleChangeFollowers(id, followers, follow[idx], idx)}
        >
          {follow[idx] ? 'Following' : 'Follow'}
        </button>
      </li>
    );
  });
};
