import PropTypes from 'prop-types';
import styles from './friendList.module.css';

export default function FriendList({ friends }) {
  const listFriends = friends.map(friend => (
    <li key={friend.id} className={styles.item}>
      <span className={friend.isOnline ? styles.online : styles.offline}>
        {friend.isOnline}
      </span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  ));

  return <ul className={styles.list}>{listFriends}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
