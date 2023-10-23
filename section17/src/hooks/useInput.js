import { useState } from 'react';

function useInput(validationFn) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validationFn(enteredValue);
  const hasError = !isValueValid && isTouched;

  const valueChangeHandler = (e) => setEnteredValue(e.target.value);
  const inputBlurHandler = () => setIsTouched(true);
  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: isValueValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
