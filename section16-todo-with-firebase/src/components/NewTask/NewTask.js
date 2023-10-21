import Section from '../UI/Section';
import TaskForm from './TaskForm';
import baseUrl from '../../api/config/firebaseUrl';
import useFetch from '../../hooks/useFetch';

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { isLoading, error, sendRequest: sendTaskRequest } = useFetch();

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: `${baseUrl}/tasks.json`,
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      createTask.bind(null, taskText),
    );
  };

  const createTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
