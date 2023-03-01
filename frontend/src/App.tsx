import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

import { useSocketContext } from "./context/socket/socketContext";
function App() {
  const { connect } = useSocketContext();
  useEffect(() => {
    connect();

    return () => {};
  }, []);

  return (
    <div className="flex flex-col">
      <Link to="/bank-login">Login in your Bank Account</Link>
      <Link to="/customer-login">Login in your Commerce Account</Link>
      <Link to="/product-page">Product page</Link>
      <Link to="/bank-user">Bank User Page</Link>
    </div>
  );
}

export default App;
