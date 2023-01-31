import PropTypes from 'prop-types';

export default function FriendListItem({ id, avatar, name, status }) {
  return (
    <li class="item" key={id}>
      <span class="status">{status}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    status:PropTypes.string,
    
}