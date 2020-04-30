import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";
import "./app.css";
import Header from "./components/Header";
import Alert from "./components/Alert";

function App() {
  const [students, setStudents] = useState([]);
  const [alert, setAlert] = useState(true);

  const removeStudent = (index) => {
    let filteredData = students.filter((student, i) => {
      return i !== index;
    });

    setStudents([...filteredData]);
  };

  const handleSubmit = (student) => {
    setStudents([...students, student]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Alert />
        <p>List of the Students</p>
        <div className="wrapper">
          <Table students={students} removeStudent={removeStudent} />
          <div className="div-form">
            <h3>Add New Student</h3>
            <Form handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
