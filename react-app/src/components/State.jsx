import { useState } from "react";
import '../css/NetflixCard.css'

const State = () => {

    const [count, setCount] = useState(0);
    const HandleClick = () => {
        setCount(() => count + 1);
    }

    const Decrement = () => {
        setCount(() => count -1)
    }

    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4rem",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>{count}</span>
          <button onClick={HandleClick}>Increament</button>
          <button onClick={Decrement} style={{ marginTop: "1rem" }}>
            Decrement
          </button>
        </div>
        <ChildComponent count={count}/>
        <Sibling/>
      </>
    );
}


export function ChildComponent({count}){
    console.log('conponent')
    return(
        <div className="">
            <h3>my Choponent {count}</h3>
        </div>
    )
}

 export function Sibling() {
  console.log("conponent");
  return (
    <div className="">
      <h3>my Sibling</h3>
    </div>
  );
}

export {State}