import styled from 'styled-components';

export const FriendListItemStyle = styled.li`
  display: flex;
  border: 1px solid black;
  align-items: center;
  gap: 20px;
  padding: 15px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const FriendStatusStyle = styled.span`
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
  width: 30px;
  height: 30px;
  display: block;
`;

export const FriendAvatarStyle = styled.img`
  display: flex;
  margin: 0;
`;

export const FriendListNameStyle = styled.p`
  margin: 0;
`;
