import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    const listFriends = friends.map(friend =>
        <li  key = {friend.id} className="item">
            <span className="status">{friend.isOnline}</span>
  <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
  <p className="name">{friend.name}</p>
</li>)
    return (
<ul className="friend-list">
  {listFriends}
</ul>        
    )    
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
}