import styles from "./App.module.css"
import Profile from "./Profile/Profile";
import user from "./data/user.json";
import Statistics from "./Statistics/Statistics";
import dataStat from "./data/data.json";
import FriendList from "./FriendList/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}
        />
      
      <Statistics
      title = "UPLOAD STATS"
      stats={dataStat}
      />

      <FriendList
      friends={friends}
      />

      <TransactionHistory
      items = {transactions}
      />
    </div>
  );
};
