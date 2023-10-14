import { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handler = (e) => setValue(e.target.value);

  return [value, handler];
}
