import {
  Link,
  redirect,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
// import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const submit = useSubmit();
  const { state } = useNavigation();

  const { data, isError, error } = useQuery({
    queryKey: ['events', id],
    queryFn: (ctx) => fetchEvent({ ...ctx, id }),
    staleTime: 10000,
  });

  //? action에 의해 더이상 필요하지 않음
  /* const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      // data from mutate() params

      // 해당 queryKey의 useQuery 작업을 모두 취소함.
      // 다음 작업을취소할때까지 기다려야해서 await
      await queryClient.cancelQueries({ queryKey: ['events', id] });

      const previousEvent = queryClient.getQueryData(['events', id]);

      // 이미 저장된 쿼리데이터를 직접 set
      queryClient.setQueryData(['events', id], data.event);

      return { previousEvent }; // to onError
    },
    onError: (error, data, context) => {
      // context = onMutate의 return 값

      // error 발생 시 쿼리데이터를 이전 event의 formData로 롤백
      queryClient.setQueryData(['events', id], context.previousEvent);
    },
    onSettled: () => {
      // onSettled: mutation이 성공하든 말든 마지막에 실행
      // 항상 최신 데이터를 받음
      queryClient.invalidateQueries(['events', id]);
    },
  }); */

  function handleSubmit(formData) {
    // mutate({ id, event: formData }); // id, event
    // navigate('../');
    submit(formData, { method: 'PUT' });
  }

  function handleClose() {
    navigate('../');
  }

  let content;
  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            'Failed to load event. Please check your inputs and try again later.'
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }
  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === 'submitting' ? (
          <p>Sending Data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  // 페이지를 load하기 전에 loader로 미리 쿼리데이터를 캐싱함
  // 그럼 EditEvent 페이지의 useQuery는 새로 서버에서 fetch하는게 아니라
  // 이 loader에서 캐싱한 데이터를 가져옴
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) =>
      fetchEvent({
        signal,
        id: params.id,
      }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedFormdata = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedFormdata });
  await queryClient.invalidateQueries(['events']);
  return redirect('../');
}
