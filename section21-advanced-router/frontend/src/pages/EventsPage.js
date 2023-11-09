import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  // events = defer 객체 안의 events 프로퍼티
  const { events } = useLoaderData();

  return (
    // 데이터가 도착하기 전까지 Suspense의 fallback을 보여준다.
    // 데이터가 도착하면(resolved) <EventsList>를 보여준다.
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

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

export function loader() {
  // defer: 데이터가 아직 resolve 되지 않았어도 컴포넌트를 미리 렌더링 하도록 명령
  return defer({
    events: loadEvents(),
  });
}
