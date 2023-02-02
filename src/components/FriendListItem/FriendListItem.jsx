import PropTypes from 'prop-types';
import {
  FriendListItemStyle,
  FriendStatusStyle,
  FriendAvatarStyle,
  FriendListNameStyle,
} from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, status }) => {
  return (
    <FriendListItemStyle key={id}>
      <FriendStatusStyle isActive={status}>{status}</FriendStatusStyle>
      <FriendAvatarStyle src={avatar} alt={name} width="48" height="48" />
      <FriendListNameStyle>{name}</FriendListNameStyle>
    </FriendListItemStyle>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
