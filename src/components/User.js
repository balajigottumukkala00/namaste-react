import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  const { name, skills } = props;

  return (
    <div className="user-card">
      <h1>Count1 = {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Zero
      </button>

      <h1>Name : {name} (Functional Component)</h1>
      <h3>Location: Bangalore</h3>

      <h4>{skills}</h4>
    </div>
  );
};

export default User;
