import { useState } from "react";

function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px solid gray", padding: "20px", margin: "10px" }}>
      <h2>{title}</h2>
      <p>현재 값: {count}</p>

      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </div>
  );
}

export default Counter;