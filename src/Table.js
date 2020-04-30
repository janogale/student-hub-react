import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile</th>
        <th>Course</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ students, removeStudent }) => {
  const rows = students.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.course}</td>
        <td>{row.mobile}</td>
        <td>
          <button onClick={() => removeStudent(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = ({ students, removeStudent }) => {
  return (
    <div>
      <table>
        <TableHeader />
        <TableBody students={students} removeStudent={removeStudent} />
      </table>
    </div>
  );
};

export default Table;
