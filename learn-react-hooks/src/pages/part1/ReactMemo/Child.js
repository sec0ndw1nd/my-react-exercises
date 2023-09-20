import { memo } from 'react';

function Child({ name, sayHi }) {
  console.log('Child rendered');

  return (
    <div style={{ marginTop: '50px' }}>
      <h3>child</h3>
      <p>Last Name: {name.lastName}</p>
      <p>First Name: {name.firstName}</p>
      <button onClick={sayHi}>say Hi</button>
    </div>
  );
}

export default memo(Child);
