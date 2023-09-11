import { useRef, useState } from 'react';

function Counter() {
  const countRef = useRef(0);
  const onClickCount = () => {
    countRef.current++;
    alert(`You clicked ${countRef.current} times!`);
  };

  return (
    <div>
      <h1>Counter</h1>
      <span>This count will not update because ref does not trigger a re-render.</span>
      <div>count: {countRef.current}</div>
      <button onClick={onClickCount}>add count</button>
    </div>
  );
}

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const timeoutRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setCurrentTime(Date.now());
    console.log('hi');

    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 30);
  };
  const handleStop = () => {
    clearInterval(timeoutRef.current);
  };

  let secondsPassed = 0;
  if (startTime != null && currentTime != null) {
    secondsPassed = (currentTime - startTime) / 1000;
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>Time passed: {secondsPassed.toFixed(3)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

function FocusMe() {
  const inputRef = useRef(null);

  const handlerFocusInput = () => inputRef.current.focus();

  return (
    <div>
      <h1>Say</h1>
      <input ref={inputRef} />
      <button onClick={handlerFocusInput}>Focus Input</button>
    </div>
  );
}

export default function UsingRef() {
  return (
    <>
      <Counter />
      <Stopwatch />
      <FocusMe />
    </>
  );
}
