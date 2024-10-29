import { useState } from "react";


const RegisterFormBest = () => {

    const [user, setUser] = useState({
        firstName: '', 
        lastName: '',
        email: '',
        password: '',
        phonenumber: ''
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
          <div className="w-96 m-auto mt-6 p-6 gap-3 rounded flex flex-col bg-slate-200">
            <h2>Sign Up</h2>
            <p>Please fill in this form create account</p>

            <label>
              <b>First Name</b>
            </label>
            <input
              className="p-1 rounded"
              type="text"
              name="firstName"
              value={user.firstName}
              placeholder="enter your first name"
              onChange={handleInputChange}
              required
            />

            <label>
              <b>Last Name</b>
            </label>
            <input
              className="p-1 rounded text-black"
              type="text"
              name="lastName"
              value={user.lastName}
              placeholder="enter your last name"
              onChange={handleInputChange}
              required
            />

            <label>
              <b>Email</b>
            </label>
            <input
              className="p-1 rounded"
              type="email"
              name="email"
              value={user.email}
              placeholder="enter your email"
              onChange={handleInputChange}
              required
            />

            <label>
              <b>Password</b>
            </label>
            <input
              className="p-1 rounded"
              type="password"
              name="password"
              value={user.password}
              placeholder="enter your password"
              onChange={handleInputChange}
              required
            />

            <label>
              <b>Phone Number</b>
            </label>
            <input
              className="p-1 rounded"
              type="text"
              name="phonenumber"
              value={user.phonenumber}
              placeholder="enter your phone number"
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="bg-blue-400 rounded p-1">
              Submit
            </button>
          </div>
        </form>
      </>
    );
}

export {RegisterFormBest}

