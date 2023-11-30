export async function fetchEvents({ signal, searchTerm }) {
  let url = 'http://localhost:3000/events';
  if (searchTerm) {
    url += `?search=${searchTerm}`;
  }

  // signal(AbortSignal): fetch 도중 취소 시 필요한 객체. react-query가 알아서 제공해줌
  const response = await fetch(url, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();

    // useQuery에서 isError = true로 트리거되고
    // error객체에 throw한 객체가 담김
    throw error;
  }

  const { events } = await response.json();

  return events;
}
