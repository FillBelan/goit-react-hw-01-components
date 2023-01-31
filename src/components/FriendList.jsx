import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
    return(
<ul class="friend-list">
    {<FriendListItem 
        id={friends[0].id}
        avatar={friends[0].avatar}
        name={friends[0].name}
        status={friends[0].isOnline}
    />
            }
             {<FriendListItem 
        id={friends[1].id}
        avatar={friends[1].avatar}
        name={friends[1].name}
        status={friends[1].isOnline}
    />
            }
             {<FriendListItem 
        id={friends[2].id}
        avatar={friends[2].avatar}
        name={friends[2].name}
        status={friends[2].isOnline}
    />
            }
             {<FriendListItem 
        id={friends[3].id}
        avatar={friends[3].avatar}
        name={friends[3].name}
        status={friends[3].isOnline}
    />
    }
</ul>
    )
}

FriendList.propTypes = {
    friends:PropTypes.array,
}