import { useState, useEffect } from 'react';

const boxStyle = {
  margin: '50px 0',
};
const spanStyle = {
  marginLeft: '10px',
};

function SpamConsole() {
  console.log('spamconsole rendered');

  useEffect(() => {
    console.log('useEffect called');
    const interval = setInterval(() => console.log('SpamConsole Mounted!!!'), 1000);
    return () => {
      clearInterval(interval);
      console.log('SpamConsole killed');
    };
  }, []);

  return <span style={spanStyle}>Spamming console.log now.</span>;
}

function UsingEffect() {
  const [isMounted, setIsMounted] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={boxStyle}>
        <button onClick={() => setIsMounted(!isMounted)}>toggle span</button>
        {isMounted && <SpamConsole />}
      </div>
      <div style={boxStyle}>
        <button onClick={() => setCount((prev) => ++prev)}>add count</button>
        <span style={spanStyle}>count: {count}</span>
      </div>
    </>
  );
}

export default UsingEffect;
