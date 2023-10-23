import useInput from '../hooks/useInput';

const BasicForm = (props) => {
  const validateNameInput = (enteredName) => enteredName.trim() !== '';
  const {
    value: enteredFirstName,
    isValid: isEnteredFirstNameValid,
    hasError: hasFirstNameError,
    changeValueHandler: changeFirstNameHandler,
    blurInputHandler: blurFirstNameInputHandler,
    reset: resetFirstNameInput,
  } = useInput(validateNameInput);
  const {
    value: enteredLastName,
    isValid: isEnteredLastNameValid,
    hasError: hasLastNameError,
    changeValueHandler: changeLastNameHandler,
    blurInputHandler: blurLastNameInputHandler,
    reset: resetLastNameInput,
  } = useInput(validateNameInput);

  const validateEmailInput = (enteredEmail) =>
    enteredEmail.trim().includes('@');
  const {
    value: enteredEmail,
    isValid: isEnteredEmailValid,
    hasError: hasEmailError,
    changeValueHandler: changeEmailHandler,
    blurInputHandler: blurEmailInputHanlder,
    reset: resetEmailInput,
  } = useInput(validateEmailInput);

  const isFormValid =
    isEnteredFirstNameValid && isEnteredLastNameValid && isEnteredEmailValid;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    const formData = {
      lastName: enteredLastName,
      firstName: enteredFirstName,
      email: enteredEmail,
    };
    console.log(formData);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${hasFirstNameError && 'invalid'}`}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={changeFirstNameHandler}
            onBlur={blurFirstNameInputHandler}
            value={enteredFirstName}
          />
          {hasFirstNameError && <p className="error-text">first name error</p>}
        </div>
        <div className={`form-control ${hasLastNameError && 'invalid'}`}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={changeLastNameHandler}
            onBlur={blurLastNameInputHandler}
            value={enteredLastName}
          />
          {hasLastNameError && <p className="error-text">last name error</p>}
        </div>
      </div>
      <div className={`form-control ${hasEmailError && 'invalid'}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={changeEmailHandler}
          onBlur={blurEmailInputHanlder}
        />
        {hasEmailError && <p className="error-text">last name error</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
