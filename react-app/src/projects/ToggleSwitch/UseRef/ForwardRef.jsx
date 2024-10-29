/* eslint-disable react/display-name */
import { useEffect, useId, useRef } from "react"


 export const ForwardRefs = () => {

    const username = useRef(null)
    const password = useRef(null)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value)
    }


    return (
      <>
        <form onSubmit={handleFormSubmit}>
          <BeforeFormSubmit label="username" ref={username} />
          <BeforeFormSubmit label="password" ref={password} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
}

const BeforeFormSubmit = ({label, ref}) => {
    const id = useId()
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" ref={ref} />
        </div>
    )
}