import { memo, useCallback, useState } from "react";





const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return (
    <button onClick={onClick} className="border p-2 bg-blue-200">
      {children}
    </button>
  );
});


export const UseCallback = () => {
    const [count, setCount] = useState(0);

    const increament = useCallback(()=>{

        setCount((prevCount) => (prevCount + 1))

    },[])

    const decreament = useCallback(()=> {
        setCount((prevCount) => (prevCount - 1))
    },[])


    return(
        <div>
            <h2>Count: {count}</h2>
            <Button onClick={increament}>Increament</Button>
            <Button onClick={decreament}>Decreament</Button>
        </div>
    )
}

//use memo using or working value optimizing
//use callback using function optimizing
//memo rendering