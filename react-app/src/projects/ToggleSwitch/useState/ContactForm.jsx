import { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    message: "",
  });

  const handleInputContact = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactForm = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleContactForm}>
        <div className="w-96 bg-blue-300 flex flex-col gap-2 m-auto mt-20 p-10 rounded-md ">
          <h2 className="text-center text-lg">Contact Form</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            className="p-2 rounded-md"
            value={user.email}
            onChange={handleInputContact}
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            className="p-2 rounded-md"
            value={user.password}
            onChange={handleInputContact}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows={10}
            cols={20}
            className="p-2 rounded-md"
            value={user.message}
            onChange={handleInputContact}
          ></textarea>
          <button
            type="submit"
            className="p-2 bg-gray-900 text-white rounded-md mt-5"
          >
            Message
          </button>
        </div>
      </form>
    </>
  );
};

export { ContactForm };
