import PropTypes from 'prop-types';
import {
  ListItem,
  FriendImage,
  FriendName,
  StatusOffline,
  StatusOnline,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      {isOnline ? (
        <StatusOnline></StatusOnline>
      ) : (
        <StatusOffline></StatusOffline>
      )}
      <FriendImage src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
