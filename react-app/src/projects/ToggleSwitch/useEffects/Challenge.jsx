import { useEffect, useState } from "react"




export const Challenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    useEffect(() => {
        console.log(name)
    }, [name])

    return(
        <div className="bg-blue-300 border p-3">
            <h2>useEffects Challenge</h2>
            <p>Count: <span>{count}</span></p>
            <button onClick={() => setCount(count + 1)} className="bg-gray-700 p-2 rounded text-white">Increament</button>
            <p>Name: <span>{name}</span></p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}