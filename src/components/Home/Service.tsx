import { add } from "@/redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { RootState } from "@/redux/store";

const Service = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen items-center">
      <h1 className="text-4xl flex justify-center items-center text-red-600">
        Redix Test
      </h1>
      <div className="flex justify-center ">
        <div>
          <p>Count: {count}</p>
          <Button onClick={() => dispatch(add(1))}> Add</Button>
          <Button className="ml-3"> Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
