import { Item } from './Item/Item';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ options, onDeleteContact }) => (
  <List options={options}>
    {options.map(item => (
      <Item item={item} key={item.id} onDeleteContact={onDeleteContact} />
    ))}
  </List>
);

ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
