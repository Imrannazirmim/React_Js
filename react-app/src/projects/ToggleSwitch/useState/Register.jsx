import { useState } from "react";

const RegisterForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const {name, value}= e.target;

    switch (name) {
      case "firstName":
        setfirstName(value);
        break;
      case "lastName":
        setlastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phonenumber":
        setPhoneNumber(value);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phonenumber,
    };
    console.log(formData);
  };

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
            value={firstName}
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
            value={lastName}
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
            value={email}
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
            value={password}
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
            value={phonenumber}
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
};

export { RegisterForm };
