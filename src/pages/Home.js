import { ImGithub, ImLinkedin } from 'react-icons/im';
import { Container, MainTitle, WrapIcons } from 'globalStyles/Global.styled';

export const HomePage = () => {
  return (
    <Container>
      <MainTitle>
        Welcome to the Tweets app. This application was created by the developer
        Anastasiia Gudymenko. You can view the working code on my GitHub page,
        or ask me a question on my Linkedin account.
      </MainTitle>
      <WrapIcons>
        <a href="https://github.com/AnastasiiaHudymenko/react-app-tweets">
          <ImGithub size={24} color=" #1182b7" />
        </a>
        <a href="https://www.linkedin.com/in/anastasia-gudymenko/">
          <ImLinkedin size={24} color=" #1182b7" />
        </a>
      </WrapIcons>
    </Container>
  );
};
