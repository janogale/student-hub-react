import React from "react";

import useInput from "./components/Input";

function Form({ handleSubmit }) {
  let [name, setName, InputName] = useInput({ name: "Student Name" });
  let [course, setCourse, InputCourse] = useInput({ name: "Course Name" });
  let [mobile, setMobile, InputMobile] = useInput({ name: "Phone Number" });

  const onFormSubmit = (event) => {
    event.preventDefault();

    handleSubmit({ name, course, mobile });

    // reset input fields.
    setName("");
    setCourse("");
    setMobile("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      {InputName}
      {InputCourse}
      {InputMobile}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
