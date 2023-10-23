import { useState } from 'react';

export default function useInput(validationFn) {
  const [value, setValue] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const changeValueHandler = (e) => setValue(e.target.value);
  const blurInputHandler = (e) => setIsInputTouched(true);

  const isValid = validationFn(value);
  const hasError = !isValid && isInputTouched;

  const reset = () => {
    setValue('');
    setIsInputTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    changeValueHandler,
    blurInputHandler,
    reset,
  };
}
