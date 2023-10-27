import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, isShowing } = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const increaseOneCountHandler = () => {
    dispatch(counterActions.increment());
  };
  const decreaseOneCountHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseCountHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decreaseCountHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowing && <div className={classes.value}>{counter}</div>}
      <div className={classes.actions}>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <button onClick={increaseCountHandler}> +5 </button>
        <button onClick={increaseOneCountHandler}> + </button>
        <button onClick={decreaseOneCountHandler}> - </button>
        <button onClick={decreaseCountHandler}> -5 </button>
      </div>
    </main>
  );
};

export default Counter;
