import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-right: 1rem;
  }

  & input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;

function Input({ input, label }, ref) {
  return (
    <StyledInputGroup>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </StyledInputGroup>
  );
}

export default forwardRef(Input);
