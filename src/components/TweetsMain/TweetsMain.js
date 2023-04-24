import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchAllUsers } from 'services/api';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Select } from '../Select/Select';
import { Button } from 'components/Button/Button';

import { Container, Section, StyledLink } from 'globalStyles/Global.styled';

export const TweetsMain = ({ users, getPage, loaded, updateUserFollowers }) => {
  const [follow, setFollow] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    (async () => {
      const res = await fetchAllUsers();
      const updateUsersLocalStorage = res.map(user => ({
        ...user,
        isFollow: false,
      }));
      const storedFollow = localStorage.getItem('follow');
      if (storedFollow) {
        setFollow(JSON.parse(storedFollow));
      } else {
        localStorage.setItem('follow', JSON.stringify(updateUsersLocalStorage));
        setFollow(() => JSON.parse(localStorage.getItem('follow')));
      }
    })();
  }, []);

  const handleChangeFollowers = (id, followers, isFollowing) => {
    const updateFollower = follow.map(el => {
      if (el.id === id) {
        return {
          ...el,
          isFollow: !el.isFollow,
          followers: el.isFollow ? el.followers - 1 : followers + 1,
        };
      }
      return el;
    });
    setFollow(updateFollower);
    localStorage.setItem('follow', JSON.stringify(updateFollower));
    updateUserFollowers(id, followers, isFollowing);
  };

  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <Section>
      <Container>
        <StyledLink to="/">Back to Home</StyledLink>
        <Select
          selectedOption={selectedOption}
          handleSelectChange={handleSelectChange}
        />
        <TweetsList
          selectedOption={selectedOption}
          handleChangeFollowers={handleChangeFollowers}
          users={users}
          follow={follow}
          loaded={loaded}
          getPage={getPage}
        />
        <Button
          users={users}
          loaded={loaded}
          getPage={getPage}
          selectedOption={selectedOption}
        />
      </Container>
    </Section>
  );
};

TweetsMain.propTypes = {
  users: PropTypes.array,
  getPage: PropTypes.func,
  loaded: PropTypes.bool,
  updateUserFollowers: PropTypes.func,
  selectedOption: PropTypes.string,
  handleSelectChange: PropTypes.func,
};