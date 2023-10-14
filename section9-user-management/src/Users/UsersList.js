import styled from 'styled-components';
import Card from '../UI/Card';

const ListCard = styled(Card)`
  padding: 0;

  & ul {
    list-style: none;
    padding: 1rem;
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

function UsersList({ users }) {
  return (
    <ListCard>
      {users.length > 0 ? (
        <ul>
          {users.map((userInfo, i) => (
            <li
              key={`user-list-${userInfo.username + Date.now() + i}`}
            >{`${userInfo.username} (${userInfo.age} years old)`}</li>
          ))}
        </ul>
      ) : (
        <div>no user data</div>
      )}
    </ListCard>
  );
}

export default UsersList;
