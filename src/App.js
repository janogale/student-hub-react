import React, { useState, useEffect } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Table from "./Table";
import Form from "./Form";
import "./app.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Alert from "./components/Alert";

function App() {
  const [students, setStudents] = useState([]);
  const [alert, setAlert] = useState({});
  const [toggleAlert, setToggleAlert] = useState(false);

  // useEffect - hide alert
  useEffect(() => {
    if (toggleAlert) {
      setTimeout(() => {
        setToggleAlert(false);
      }, 2000);
    }
  }, [toggleAlert]);

  const removeStudent = (index) => {
    let filteredData = students.filter((student, i) => {
      return i !== index;
    });

    setStudents([...filteredData]);
  };

  const handleSubmit = (student) => {
    if (student.name && student.course && student.mobile) {
      setStudents([...students, student]);
      setAlert({
        message: "One Student Created.",
        color: "#090",
        bg: "#bef3be",
      });
      setToggleAlert(true);
    } else {
      setAlert({
        message: "Please Fill all Fields",
        color: "red",
        bg: "#f3cad8",
      });
      setToggleAlert(true);
    }
  };

  return (
    <>
      <div className="container">
        {toggleAlert && <Alert alert={alert} />}
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

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />

      <Route path="/" exact component={App} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </BrowserRouter>
  );
};
export default Layout;
