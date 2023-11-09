import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail');

  const loadingFallback = <p style={{ textAlign: 'center' }}>Loading...</p>;
  return (
    <>
      <Suspense fallback={loadingFallback}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={loadingFallback}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      { status: 500 },
    );
  }
  const resData = await response.json();
  return resData.event;
}
async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    //! DO NOT return response
    // defer 사용하면 수동으로 파싱해주어야 한다.
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  // defer: 데이터가 아직 resolve 되지 않았어도 컴포넌트를 미리 렌더링 하도록 명령
  // await 으로 로드 순서를 결정할 수 있다.
  // await을 loadEvent와 loadEvents에 번갈아 놓고 비교해보면 바로 이해함
  // await loadEvent -> loadEvent를 로드할때까지 화면을 안그림. 로드 후에 나머지를 로드함
  // 즉 await 키워드가 붙으면 해당 loader들이 로드를 해야 사용자에게 화면이 보이게 된다.
  return defer({
    event: await loadEvent(params.eventId),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    { method: request.method },
  );

  if (!response.ok) {
    throw json({ message: 'Could not delete event.' }, { status: 500 });
  }
  return redirect('/events');
}
