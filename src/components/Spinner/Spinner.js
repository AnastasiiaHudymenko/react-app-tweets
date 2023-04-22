import { BallTriangle } from 'react-loader-spinner';
import { ContainerSpinner } from 'globalStyles/Global.styled';

export const Spinner = () => {
  return (
    <ContainerSpinner>
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="#04a0e0"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </ContainerSpinner>
  );
};
