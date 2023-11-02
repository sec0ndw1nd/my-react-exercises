import { useParams } from 'react-router-dom';

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <div>{params.eventId}</div>
    </>
  );
}

export default EventDetailPage;
