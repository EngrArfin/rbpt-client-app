import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/redux/store";
import { add, subtract } from "@/redux/features/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(add())}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(subtract())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
