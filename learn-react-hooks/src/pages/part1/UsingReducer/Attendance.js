import { useReducer, useState } from 'react';

const initialState = {
  students: [
    {
      id: Date.now(),
      name: 'Park',
      isChecked: false,
    },
  ],
};

const reducer = (state, action) => {
  console.log('Attendance reducer called', action);

  switch (action.type) {
    case 'ADD_STUDENT': {
      const newStudentInfo = {
        id: Date.now(),
        name: action.payload.name,
        isChecked: false,
      };
      return {
        students: [...state.students, newStudentInfo],
      };
    }
    case 'DELETE_STUDENT': {
      const delId = action.payload.id;
      return {
        students: state.students.filter((info) => info.id !== delId),
      };
    }
    case 'CHECK_STUDENT': {
      return {
        students: state.students.map((student) => {
          return student.id === action.payload.id
            ? { ...student, isChecked: !student.isChecked }
            : student;
        }),
      };
    }
    default:
      return;
  }
};

export default function Attendance() {
  const [nameInput, setNameInput] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>출석부</h1>
      <h3>총 학생 수: {studentsInfo.students.length}</h3>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: 'ADD_STUDENT', payload: { name: nameInput } })}
      >
        추가
      </button>
      {studentsInfo.students.map((studentInfo) => (
        <Student
          key={`${studentInfo.id}`}
          studentInfo={studentInfo}
          dispatch={dispatch}
        />
      ))}
    </>
  );
}

function Student({ studentInfo, dispatch }) {
  return (
    <div key={`student-name-${studentInfo.name}`}>
      <span
        style={{
          color: studentInfo.isChecked ? 'gray' : 'black',
          textDecoration: studentInfo.isChecked ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() =>
          dispatch({ type: 'CHECK_STUDENT', payload: { id: studentInfo.id } })
        }
      >
        {studentInfo.name}
      </span>
      <button
        style={{ marginLeft: '20px' }}
        onClick={() =>
          dispatch({ type: 'DELETE_STUDENT', payload: { id: studentInfo.id } })
        }
      >
        삭제
      </button>
    </div>
  );
}
