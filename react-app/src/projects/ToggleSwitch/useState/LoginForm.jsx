
import { useState } from "react";

const LoginForm = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="bg-blue-400 w-80 p-4 rounded flex flex-col m-auto mt-10 gap-2">
          <h2>Login Form</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-[#2e0a2c] text-white rounded ">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export { LoginForm };
