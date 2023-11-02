import { useParams } from 'react-router-dom';

function EditEventPage() {
  const params = useParams();
  return (
    <>
      <h1>EditEventPage</h1>
      <div>{params.eventId}</div>
    </>
  );
}

export default EditEventPage;
