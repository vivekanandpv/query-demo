import React from 'react';

const Counter = (props) => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => setCounter(counter - 1);

  return (
    <>
      <h2>
        Counter <span data-testid='counter-span'>{counter}</span>
      </h2>
      <button onClick={increment} data-testid='inc-btn'>
        Increment
      </button>
      <button onClick={decrement} data-testid='dec-btn'>
        Decrement
      </button>
    </>
  );
};

export default Counter;
