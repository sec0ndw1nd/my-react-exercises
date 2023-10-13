import styled from 'styled-components';
import Button from './Button';
import useInput from '../hooks/useInput';

const ActionsContainer = styled.p`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
`;

const StyledForm = styled.form`
  padding: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
  border-radius: 4px;
  background: linear-gradient(180deg, #307e6c, #2b996d);

  & label {
    display: block;
    margin-bottom: 0.25rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  & input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #76c0ae;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #c2e9e0;
    font-size: 1rem;
  }
`;

export default function CalcForm({ calculateHandler }) {
  const [currentSavings, onCurrentSavings] = useInput('');
  const [yearlySavings, onYearlySavings] = useInput('');
  const [expectedInterest, onExpectedInterest] = useInput('');
  const [investmentDuration, onInvestmentDuration] = useInput('');

  const onCalculate = (e) => {
    e.preventDefault();

    if (!currentSavings || !yearlySavings || !expectedInterest || !investmentDuration) {
      alert('fill inputs');
      return;
    }

    const formData = {
      currentSavings,
      yearlySavings,
      expectedInterest,
      investmentDuration,
    };

    calculateHandler(formData);
  };
  return (
    <StyledForm onSubmit={onCalculate}>
      <InputGroup>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={onCurrentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={onYearlySavings}
          />
        </p>
      </InputGroup>
      <InputGroup>
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            type="number"
            id="expected-return"
            value={expectedInterest}
            onChange={onExpectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={onInvestmentDuration}
          />
        </p>
      </InputGroup>
      <ActionsContainer>
        <Button type="reset" $secondary>
          Reset
        </Button>
        <Button type="submit">Calculate</Button>
      </ActionsContainer>
    </StyledForm>
  );
}
