import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import user from '../../data/user.json';
import data from '../..//data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions';
import { Container, Wrapper } from './App.styled';

export const App = () => {
  return (
    <Container>
      <div>
        <Wrapper>
          <Profile
            avatar={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
          />
          <FriendList friends={friends} />
        </Wrapper>

        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>

      <TransactionHistory items={transactions} />
    </Container>
  );
};
