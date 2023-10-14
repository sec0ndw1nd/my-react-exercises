import styled from 'styled-components';
import Card from './Card';
import Button from './Button';

const ModalWindow = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;
const ModalHeader = styled.header`
  background: #4f005f;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;
const ModalContent = styled.div`
  padding: 1rem;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export default function ErrorModal({ error, onCloseModal }) {
  return (
    <>
      <Backdrop onClick={onCloseModal} />
      <ModalWindow>
        <ModalHeader>
          <h2>{error.header}</h2>
        </ModalHeader>
        <ModalContent>
          <p>{error.message}</p>
        </ModalContent>
        <footer>
          <Button onClick={onCloseModal}>Okay</Button>
        </footer>
      </ModalWindow>
    </>
  );
}
