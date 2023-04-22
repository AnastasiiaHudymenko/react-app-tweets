import { useEffect, useState } from 'react';
import { fetchAllUsers } from 'services/api';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Button } from 'components/Button/Button';
import { Container } from 'globalStyles/Global.styled';

export const TweetsMain = ({ users, getPage, loaded, updateUserFollowers }) => {
  const [allListUsers, setAllListUsers] = useState([]);
  const [follow, setFollow] = useState([]);

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
  const handleChangeFollowers = (id, followers, isFollowing, i) => {
    const updateFollower = follow.map((el, idx) => {
      if (idx === i) {
        return !el;
      }
      return el;
    });
    setFollow(updateFollower);
    localStorage.setItem('follow', JSON.stringify(updateFollower));
    updateUserFollowers(id, followers, isFollowing);
  };

  return (
    <section>
      <Container>
        <TweetsList
          handleChangeFollowers={handleChangeFollowers}
          users={users}
          follow={follow}
        />
        <Button users={users} loaded={loaded} getPage={getPage} />
      </Container>
    </section>
  );
};
