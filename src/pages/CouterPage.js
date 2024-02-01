import { useState } from "react";

function CouterPage({ initialCount }) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Count is {count}</h1>
            <div className="flex">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}

export default CouterPage;