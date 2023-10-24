import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.length <= 0;
const isFiveChars = (value) => value.length === 5;

function Checkout({ onCancel, onConfirm }) {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value.trim();
    const enteredStreet = streetInputRef.current.value.trim();
    const enteredPostalCode = postalCodeInputRef.current.value.trim();
    const enteredCity = cityInputRef.current.value.trim();

    const isNameValid = !isEmpty(enteredName);
    const isStreetValid = !isEmpty(enteredStreet);
    const isCityValid = !isEmpty(enteredCity);
    const isPostalCodeValid = isFiveChars(enteredPostalCode);

    setFormValidity({
      name: isNameValid,
      street: isStreetValid,
      city: isCityValid,
      postalCode: isPostalCodeValid,
    });

    if (!isNameValid || !isStreetValid || !isCityValid || !isPostalCodeValid) {
      return;
    }

    const formData = {
      name: enteredName,
      street: enteredStreet,
      postalCode: +enteredPostalCode,
      city: enteredCity,
    };

    onConfirm(formData);
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formValidity.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.postalCode && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters)!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
