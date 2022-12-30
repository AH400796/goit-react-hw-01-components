import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <div>
        <div className={css.wrapper}>
          <Profile
            avatar={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
          />
          <FriendList friends={friends} />
        </div>

        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>

      <TransactionHistory items={transactions} />
    </div>
  );
};
