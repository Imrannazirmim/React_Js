import { useEffect, useState } from "react"



export const CleanUp = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
       const time =  setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000);
        return () => clearInterval(time)
    }, [])
    return(
        <div className="bg-blue-300 p-3">
            <p>Realtime Counter</p>
            <span className="text-xl">{count}</span>
            <p>RealTime Counter</p>
        </div>
    )
}