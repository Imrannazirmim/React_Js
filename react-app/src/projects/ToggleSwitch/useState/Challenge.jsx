//challenge counter
import { useState } from "react";
import "./Challenge.css"

const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0)

  const incrementBtn = () => {
    setCount(count + step)
  }
  const decrementBtn = () => {
    setCount(count - step)
  }
  const resetBtn = () => {
    setCount(0)

  }


    return (
      <div className="counter-body">
        <h2>Counter App</h2>
        <p>
          Count: <span>{count}</span>
        </p>
        <div>
          <label htmlFor="">
            Step:
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
          </label>
        </div>

        <div>
          <button onClick={incrementBtn}>Increment</button>
          <button onClick={decrementBtn} disabled={count <= 0} >Decrement</button>
          <button onClick={resetBtn}>Reset</button>
        </div>
      </div>
    );
}

export {CounterChallenge}