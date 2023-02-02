import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendListStyled } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(friend => (
        <FriendListItem
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
        />
      ))}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
