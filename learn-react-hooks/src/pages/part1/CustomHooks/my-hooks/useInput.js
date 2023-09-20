import { useState } from 'react';

export function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInput = (e) => setInputValue(e.target.value);

  return [inputValue, handleInput];
}
