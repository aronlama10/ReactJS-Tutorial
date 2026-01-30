import React, {useState} from "react";

export default function MyComponent() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        // this will only increment 1 time so instead this we need to use UPDATER FUNCTIONS
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // now we pass the UPDATER FUNCTION as a argument now this update the pervious state.
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }
    const decrement = () => {
        // this will only decrement 1 time so instead this we need to use UPDATER FUNCTIONS
        // setCount(count - 1);
        // setCount(count - 1);
        // setCount(count - 1);

        // now we pass the UPDATER FUNCTION as a argument now this update the pervious state.
        setCount(count => count - 1);
        setCount(count => count - 1);
        setCount(count => count - 1);
    }
    const reset = () => {
        // setCount(0); or
        setCount(count => count = 0);
    }

    return (
        <>
            <div className="coutner-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button className="counter-button" onClick={increment}>Increment</button>

            </div>
        </>
    );
}