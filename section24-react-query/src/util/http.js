export async function fetchEvents() {
  const response = await fetch('http://localhost:3000/events');

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
