import React, { useState } from "react";

export default function useInput({ name = "", label = name }) {
  let [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  let input = (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );

  return [value, setValue, input];
}
