import PropTypes from 'prop-types';
import { ListBtn, ListEl, Name } from './Item.styled';
export const Item = ({ item, onDeleteContact }) => (
  <ListEl>
    <Name>Name:</Name>
    <Name>{item.name}</Name>
    <Name>Number:</Name>
    <Name>{item.number}</Name>
    <ListBtn type="button" onClick={() => onDeleteContact(item.id)}>
      Delete
    </ListBtn>
  </ListEl>
);

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
