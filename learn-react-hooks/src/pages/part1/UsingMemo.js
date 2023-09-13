import React, { useEffect, useMemo, useState } from 'react';

function Calc() {
  const [lowNumber1, setLowNumber1] = useState(0);
  const [lowNumber2, setLowNumber2] = useState(0);
  const [highNumber1, setHighNumber1] = useState(0);
  const [highNumber2, setHighNumber2] = useState(0);

  const slowCalc = (a, b) => {
    console.log('slowCalc called');
    for (let i = 0; i < 999999999; i++) {
      /* do nothing but delay */
    }
    return a + b;
  };
  const fastCalc = (a, b) => a + b;

  const slowCalcResult = useMemo(
    () => slowCalc(lowNumber1, lowNumber2),
    [lowNumber1, lowNumber2],
  );
  const fastCalcResult = fastCalc(highNumber1, highNumber2);

  return (
    <>
      <h1>1. Calc</h1>
      <div>
        <h2>slow calc</h2>
        <input
          type="number"
          value={lowNumber1}
          onChange={(e) => setLowNumber1(+e.target.value)}
        />
        <span> + </span>
        <input
          type="number"
          value={lowNumber2}
          onChange={(e) => setLowNumber2(+e.target.value)}
        />
        <span> = {slowCalcResult}</span>
      </div>
      <div>
        <h2>fast calc</h2>
        <input
          type="number"
          value={highNumber1}
          onChange={(e) => setHighNumber1(+e.target.value)}
        />
        <span> + </span>
        <input
          type="number"
          value={highNumber2}
          onChange={(e) => setHighNumber2(+e.target.value)}
        />
        <span> = {fastCalcResult}</span>
      </div>
    </>
  );
}

function Card() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAttack, setIsAttack] = useState(true);

  const theme = [
    { background: 'white', color: 'black' },
    { background: 'black', color: 'white' },
  ];

  // info before re-render !== info after re-render
  // const info = {
  //   type: isAttack ? 'Attack' : 'Defence',
  // };
  const info = useMemo(
    () => ({
      type: isAttack ? 'Attack' : 'Defence',
    }),
    [isAttack],
  );

  useEffect(() => {
    console.log('useEffect called');
  }, [info]);

  return (
    <div
      style={{
        margin: '50px auto',
        padding: '30px 0',
        border: '1px solid black',
        width: '500px',
      }}
    >
      <div style={isDarkMode ? theme[1] : theme[0]}>
        <h1>2. Card</h1>
        <input
          id="darkmode"
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
        <label htmlFor="darkmode">DarkMode</label>
        <div>Type is {info.type}</div>
        <button onClick={() => setIsAttack(!isAttack)}>toggle type</button>
      </div>
    </div>
  );
}

export default function UsingMemo() {
  return (
    <>
      <Calc />
      <Card />
    </>
  );
}
