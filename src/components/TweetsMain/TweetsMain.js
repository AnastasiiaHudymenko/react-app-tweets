import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchAllUsers } from 'services/api';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Button } from 'components/Button/Button';
import { Container, Section, StyledLink } from 'globalStyles/Global.styled';

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
    <Section>
      <Container>
        <StyledLink to="/">Back to Home</StyledLink>
        <div>
          <section>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </section>
        </div>
        <TweetsList
          handleChangeFollowers={handleChangeFollowers}
          users={users}
          follow={follow}
        />
        <Button users={users} loaded={loaded} getPage={getPage} />
      </Container>
    </Section>
  );
};

TweetsMain.propTypes = {
  users: PropTypes.array,
  getPage: PropTypes.func,
  loaded: PropTypes.bool,
  updateUserFollowers: PropTypes.func,
};
