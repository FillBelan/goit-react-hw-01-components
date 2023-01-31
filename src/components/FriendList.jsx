import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
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
  friends: PropTypes.array,
};
