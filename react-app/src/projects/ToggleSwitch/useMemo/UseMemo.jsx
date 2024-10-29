import {  useMemo, useState } from "react"



const ExpensiveComponent = () => {
    const sum = () => {
        let i = 0;
        for(i = 0; i <= 100000000; i++){
            i = i + 1;
        }
        return i;
    }
    const total = useMemo(()=>{
        return sum()
    },[]);
    return <p>sum: {total}</p>
}


const MemoParentComponent = () =>{
    const [count, setCount] = useState(0)
    return(
        <div>
            <ExpensiveComponent/>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <h2>{count}</h2>
        </div>
    )
}

export {MemoParentComponent}

//usememo expensive functions call return value;
