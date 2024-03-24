import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./store"
import { decrement, increment, incrementAsync, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch: AppDispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState("2");

    return (
        <div>
            <span>Count: {count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Add Amount</button>
            <button onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}>Add async</button>
        </div>
    )
}

export default Counter;