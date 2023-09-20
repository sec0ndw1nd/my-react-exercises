import { useState } from 'react';
import { useInput } from './my-hooks/useInput';
import { useFetch } from './my-hooks/useFetch';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const preStyle = { textAlign: 'left' };

function CustomHooks() {
  const [inputValue, onChangeInput] = useInput('');
  const [isPosts, setIsPosts] = useState(true);

  const { data: usersData } = useFetch(baseUrl, 'users');
  const { data: postsOrTodosData, fetchUrl } = useFetch(baseUrl, 'posts');

  const btnHandler = () => {
    fetchUrl(isPosts ? 'Todos' : 'Posts');
    setIsPosts((prev) => !prev);
  };

  return (
    <>
      <div>
        <h1>useInput</h1>
        <div>
          <input type="text" value={inputValue} onChange={onChangeInput} />
          <h1>Users</h1>
          {usersData && (
            <pre style={preStyle}>{JSON.stringify(usersData.slice(0, 2), null, 2)}</pre>
          )}
          <h1>
            {isPosts ? 'Posts' : 'Todos'}
            <button onClick={btnHandler}>Get {isPosts ? 'Todos' : 'Posts'}</button>
          </h1>
          {postsOrTodosData && (
            <pre style={preStyle}>
              {JSON.stringify(postsOrTodosData.slice(0, 3), null, 2)}
            </pre>
          )}
        </div>
      </div>
    </>
  );
}

export default CustomHooks;
