import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home_Admin from "./Home_Admin"
import Home_User from "./Home_User"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const [sector, setSector] = useState("");
  const [roleSector, setRoleSector] = useState("React - Assessment");

  const addEmployees = (newEmployee) => {
    let prevEmployee = Emp;
    prevEmployee = [...prevEmp, newEmployee]
    setEmployees(prevEmployee);
  }

  const role = () => {
    if (sector === "Admin") {
      return (
        <div>
          <Home_Admin employees={employees} addEmployee = {addEmployees} setEmployees = {setEmployees} />
        </div>
      )
    } else if (sector === "User") {
      return <Home_User employees={employees} />;
    } else {
      return <div></div>
    }
  }

  return (
    <div>
      <Navbar />
      <h1>Generation Thailand<br></br>{roleSector}</h1>
      <button onClick={() => {
        setRoleSector("Home - User Sector")
        setSector("User")}}>User Home Sector</button>
      <button onClick={() => {
        setRoleSector("Home - Admin Sector")
        setSector("Admin")}}>Admin Home Sector</button>
        {role()}
    </div>
  );
};

export default Home;
