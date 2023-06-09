import React from "react";
import UserRoutes from "./routes/UserRoutes/UserRoutes";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <UserRoutes />
    </div>
  );
};

export default App;
