import React, {useState} from "react";


function Counter(props) {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increaseCounter}>Click me</button>
    </div>
  );
}

export default Counter