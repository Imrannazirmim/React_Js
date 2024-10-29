import { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");

  const handleform = (e) => {
    setName(e.target.value)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(name)
  };
  return (
    <section>
      <h2 className="text-center mt-3">Uncontrolled components</h2>

      <form onSubmit={handleSubmitForm}>
        <label>
          Name:
          <input
            className="border align-middle "
            type="text"
            id="inputName"
            name="name"
            value={name}
            onChange={handleform}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export { ControlledForm };
