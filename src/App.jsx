import Profile from "./components/Profil/profile"
import Statistics from './components/Statistics/statistic-list'
import FriendList from "./components/FriendList/friend-list"
import TransactionsHistory from "./components/TransactionHistory/transaction-history"

import user from './user.json'
import stats from './statistics.json'
import friends from './friends.json'
import transactions from './transactions.json'




export default function App() {
    return <>
        <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
        />
        <Statistics title="Upload stats" stats={stats} />
        <Statistics stats={stats} />
        <FriendList allFriends={friends} />
        <TransactionsHistory items={ transactions } />
    </>
}