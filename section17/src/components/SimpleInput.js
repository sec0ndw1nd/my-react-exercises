import useInput from '../hooks/useInput';

function SimpleInput(props) {
  // const [enteredName, setEnteredName] = useState('');
  // const [isEnteredNameTouched, setIsEnteredNameTouched] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [isEnteredEmailTouched, setIsEnteredEmailTouched] = useState(false);

  const validateName = (enteredName) => enteredName.trim() !== '';
  const validateEmail = (enteredEmail) => enteredEmail.includes('@');

  const {
    value: enteredName,
    isValid: isEnteredNameValid,
    hasError: hasNameError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetInputName,
  } = useInput(validateName);
  const {
    value: enteredEmail,
    isValid: isEnteredEmailValid,
    hasError: hasEmailError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetInputEmail,
  } = useInput(validateEmail);

  const isFormValid = isEnteredNameValid && isEnteredEmailValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submit processing..');

    // validation
    if (!isEnteredNameValid) {
      console.log('input is empty');
      return;
    }

    const formData = {
      name: enteredName.trim(),
      email: enteredEmail.trim(),
    };
    console.log(formData);

    resetInputName();
    resetInputEmail();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${hasNameError && 'invalid'}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {hasNameError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={`form-control ${hasEmailError && 'invalid'}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {hasEmailError && <p className="error-text">Email must include '@'.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
}

export default SimpleInput;
