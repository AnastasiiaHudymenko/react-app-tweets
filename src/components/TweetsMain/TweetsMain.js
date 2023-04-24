import { useState } from 'react';
import PropTypes from 'prop-types';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Select } from '../Select/Select';
import { Button } from 'components/Button/Button';

import { Container, Section, StyledLink } from 'globalStyles/Global.styled';

export const TweetsMain = ({
  users,
  getPage,
  loaded,
  updateUserFollowers,
  follow,
}) => {
  const [selectedOption, setSelectedOption] = useState('');

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

    localStorage.setItem('follow', JSON.stringify(updateFollower));
    updateUserFollowers(id, followers, isFollowing, updateFollower);
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
