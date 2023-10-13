import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background: ${(props) =>
    props.$secondary ? 'transparent' : 'linear-gradient(180deg, #1f584b, #17493d)'};
  color: #c2e9e0;
  font-family: 'Roboto Condensed', sans-serif;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.$secondary ? 'transparent' : 'linear-gradient(180deg, #1b5346, #113c32)'};
    color: ${(props) => (props.$secondary ? '#91e1d0' : '#c2e9e0')};
  }
`;

export default Button;
