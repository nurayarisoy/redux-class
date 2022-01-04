import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "../../redux/actions/counter";
import "./Counter.css";

const Counter = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1
        className={
          counter > 0
            ? "counter-pos"
            : counter < 0
            ? "counter-neg"
            : "counter-zero"
        }
      >
        {counter}
      </h1>
      <div>
        <button className="counter-button positive" onClick={() => dispatch(increase())}>incease</button>
        <button className="counter-button zero" onClick={() => dispatch(reset())}>reset</button>
        <button className="counter-button negative" onClick={() => dispatch(decrease())}>decrease</button>
      </div>
    </div>
  );
};

export default Counter;
