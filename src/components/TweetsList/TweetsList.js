import { useEffect, useState } from 'react';
import { fetchAllUsers } from 'services/api';

export const TweetsList = ({ users, updateUserFollowers }) => {
  const [follow, setFollow] = useState([]);
  const [allListUsers, setAllListUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetchAllUsers();
      setAllListUsers(res);
    })();
  }, []);

  useEffect(() => {
    const storedFollow = localStorage.getItem('follow');
    if (storedFollow) {
      setFollow(JSON.parse(storedFollow));
    } else {
      const newState = new Array(allListUsers.length).fill(false);
      setFollow(newState);
    }
  }, [allListUsers.length]);

  const handleChangeFollowers = (id, followers, action, i) => {
    const updateFollower = follow.map((el, idx) => {
      if (idx === i) {
        return !el;
      }
      return el;
    });
    setFollow(updateFollower);
    localStorage.setItem('follow', JSON.stringify(updateFollower));
    updateUserFollowers(id, followers, action);
  };

  return (
    <ul>
      {users.map(({ id, user, tweets, followers, avatar }, idx) => {
        return (
          <li key={id}>
            <img width={60} src={avatar} alt="user avatar" />
            <p>{user}</p>
            <p>{tweets}</p>
            <p>{followers}</p>
            <button
              onClick={() =>
                handleChangeFollowers(id, followers, follow[idx], idx)
              }
            >
              {follow[idx] ? 'Following' : 'Follow'}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
