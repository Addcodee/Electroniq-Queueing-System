import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <span onClick={() => navigate("/")}>Home</span>
      <span onClick={() => navigate("/client")}>Client</span>
      <span onClick={() => navigate("/operator")}>Operator</span>
      <span onClick={() => navigate("/registrator")}>
        Registrator
      </span>
      <span onClick={() => navigate("/admin")}>Admin</span>
    </div>
  );
};

export default Navbar;
