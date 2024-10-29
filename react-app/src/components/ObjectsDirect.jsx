import { useState } from "react";

// const users = [
  
// ];


 const ObjectsDirect = () => {

    const [users, setUsers] = useState([
      { name: "imran", age: 22 },
      { name: "nazir", age: 29 },
      { name: "mim", age: 20 },
      { name: "eyaqub", age: 21 },
      { name: "mansura", age: 44 },
    ]);

    const totalCount = users.length;
    const avarageAge = users.reduce((accum, currentEl) => accum + currentEl.age, 0 / totalCount)

    return(
        <div>
            <ul>
                {users.map((curElm, index) => {
                    return(
                        <li key={index}>{curElm.name}, {curElm.age}</li>
                    )
                })}
            </ul>
            <p>Total Count: {totalCount}</p>
            <p>Total average age: {avarageAge} </p>
        </div>
    )
}

export {ObjectsDirect}