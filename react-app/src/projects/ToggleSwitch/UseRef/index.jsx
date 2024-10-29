import { useRef } from "react";

export const UseRef = () => {
  const username = useRef(null);
  const password = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value)
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border"
          ref={username}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          ref={password}
          className="border"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
