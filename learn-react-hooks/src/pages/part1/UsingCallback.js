import { useCallback, useEffect, useState } from 'react';

function UsingCallback() {
  const [age, setAge] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handler = useCallback(() => console.log(`your age is ${age}`), [age]);

  useEffect(() => {
    console.log('handler updated.');
  }, [handler]);

  return (
    <>
      <div>
        <span>your age: </span>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <button onClick={handler}>Confirm</button>
      </div>
      <input
        id="checkbox"
        type="checkbox"
        value={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="checkbox">checkbox</label>
    </>
  );
}

export default UsingCallback;
