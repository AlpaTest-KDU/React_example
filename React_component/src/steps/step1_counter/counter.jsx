import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div style={{padding:"20px"}}>
            <h2>Counter 예시</h2>
            <p>현재값: {count}</p>

            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
            <button onClick={() => setCount(0)}>초기화</button>
        </div>
    );
}

export default Counter;