import { useState, useMemo, useCallback } from 'react';
import Child from './Child';

function Family() {
  const [parentAge, setParentAge] = useState(0);

  const childName = useMemo(
    () => ({
      lastName: 'Park',
      firstName: 'Na-Mu',
    }),
    [],
  );

  const sayHi = useCallback(() => console.log('Hi'), []);

  return (
    <>
      <div>
        <h3>parent</h3>
        <input
          type="number"
          value={parentAge}
          onChange={(e) => setParentAge(e.target.value)}
        />
      </div>
      <Child name={childName} sayHi={sayHi} />
    </>
  );
}

export default Family;
