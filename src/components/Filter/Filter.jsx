import { Box } from 'components/ui/Box';
import PropTypes from 'prop-types';
import { SearchBox } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Box as="section" mb={4} p={0}>
        <h3>Find contacts by name</h3>
        <SearchBox
          type="text"
          placeholder="Enter contact name"
          value={value}
          onChange={onChange}
        />
      </Box>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
