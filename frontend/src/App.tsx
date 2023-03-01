import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("/api/hello").then((res) => {
      console.log(res.data);
    });
    const socket = io("http://localhost:8000");

    return () => {};
  }, []);

  return (
    <div className="flex flex-col">
      <Link to="/bank-login">Login in your Bank Account</Link>
      <Link to="/customer-login">Login in your Commerce Account</Link>
      <Link to="/product-page">Product page</Link>
    </div>
  );
}

export default App;
