import PropTypes from 'prop-types';
import { SelectStyled, ContainerSelect } from './Select.styled';

export const Select = ({ selectedOption, handleSelectChange }) => {
  return (
    <ContainerSelect>
      <SelectStyled value={selectedOption} onChange={handleSelectChange}>
        <option value={''}>Choose to option</option>
        <option value={'All'}>All</option>
        <option value={'Follow'}>Follow</option>
        <option value={'Following'}>Following</option>
      </SelectStyled>
    </ContainerSelect>
  );
};

Select.propTypes = {
  selectedOption: PropTypes.string,
  handleSelectChange: PropTypes.func,
};
