import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul class='friend-list'>
      {friends.map(friend => (
        <FriendListItem
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
        />
      ))}
    </ul>
  );
} 

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
