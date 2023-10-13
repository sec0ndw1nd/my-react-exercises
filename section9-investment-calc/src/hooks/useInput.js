import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChangeValue = (e) => setValue(e.target.value);

  return [value, onChangeValue];
}

export default useInput;
