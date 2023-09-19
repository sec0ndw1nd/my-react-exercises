import React, { useState, useReducer } from 'react';

// state === money , action === an object param from called dispatch
const reducer = (state, action) => {
  console.log('reducer called', state, action);

  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default: {
      console.log('do nothing');
      return;
    }
  }
};

export default function Wallet() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 100);

  return (
    <>
      <h1>Wallet</h1>
      <div>
        In my wallet, I have <strong>${money}</strong>
      </div>
      <input type="number" value={number} onChange={(e) => setNumber(+e.target.value)} />
      <button
        onClick={() => {
          dispatch({
            type: 'deposit',
            payload: number,
          });
        }}
      >
        save
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'withdraw',
            payload: number,
          });
        }}
      >
        pay
      </button>
    </>
  );
}
