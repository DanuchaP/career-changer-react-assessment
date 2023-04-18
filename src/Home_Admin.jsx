import React, { useState, useEffect } from "react";

const HomeAdmin = ({ employees, addEmployee, setEmployees }) => {
  const [data, setData] = useState(employees.length);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const nameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };
  const lastNameChange = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
  };
  const positionChange = (e) => {
    const newPosition = e.target.value;
    setPosition(newPosition);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        ></input>

        <button onClick={addDataToTable}>Save</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.lastname}</td>
              <td>{row.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeAdmin;
