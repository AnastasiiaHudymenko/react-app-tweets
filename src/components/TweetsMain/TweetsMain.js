import { TweetsList } from 'components/TweetsList/TweetsList';
import { Button } from 'components/Button/Button';
import { Container } from 'globalStyles/Global.styled';

export const TweetsMain = ({ users, getPage, loaded, updateUserFollowers }) => {
  return (
    <section>
      <Container>
        <TweetsList updateUserFollowers={updateUserFollowers} users={users} />
        <Button users={users} loaded={loaded} getPage={getPage} />
      </Container>
    </section>
  );
};
