import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import ErrorModal from '../UI/ErrorModal';

const Form = styled.form`
  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

function AddUserForm({ onAddUser }) {
  const [username, onChangeUsername] = useInput('');
  const [age, onChangeAge] = useInput('');
  const [error, setError] = useState(null);

  const closeModalHandler = () => setError(null);

  const onSubmit = (e) => {
    e.preventDefault();

    // check validation
    if (!username.trim().length || !age.trim().length) {
      return setError({
        header: 'Invalid input',
        message: 'Please, enter a valid name and age (non-empty values).',
      });
    }
    if (age && +age < 1) {
      return setError({
        header: 'Invalid input',
        message: 'Please, enter a valid age (> 0).',
      });
    }

    const formData = { username, age };
    onAddUser(formData);
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          error={{ header: error.header, message: error.message }}
          onCloseModal={closeModalHandler}
        />
      )}
      <Card>
        <Form onSubmit={onSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={username} onChange={onChangeUsername} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={onChangeAge} />
          <Button type="submit">Add User</Button>
        </Form>
      </Card>
    </>
  );
}

export default AddUserForm;
