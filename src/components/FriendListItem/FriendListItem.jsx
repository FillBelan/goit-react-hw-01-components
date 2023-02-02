import PropTypes from 'prop-types';

export const FriendListItem = ({ id, avatar, name, status }) => {
  return (
    <li class="item" key={id}>
      <span class="status">{status}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status:PropTypes.bool.isRequired,
    
}