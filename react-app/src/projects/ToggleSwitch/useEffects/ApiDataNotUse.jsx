// import { useState } from "react"


// export const ApiDataNotUse = () => {

//     const [apiData, setApiData] = useState([])

//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => setApiData(data))

//     return(
//         <div>
//            <ul>
//             {
//                 apiData.map((currentEl) => {
//                     return <li key={currentEl.id}>{currentEl.title}</li>
//                 })
//             }
//            </ul>
//         </div>
//     )
// }