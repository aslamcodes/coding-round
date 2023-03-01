import React, { useEffect, useState } from "react";
import { useSocketContext } from "../../context/socket/socketContext";
import { io } from "socket.io-client";
const BankUser = () => {
  const [requests, setRequests] = useState(0);
  const { socket } = useSocketContext();
  useEffect(() => {
    socket.on("change", (data) => {
      setRequests(data);
    });
  }, [socket]);

  return (
    <div>
      {requests > 0 && (
        <button
          onClick={() => {
            socket.emit("request fullfil");
          }}
        >
          Approve
        </button>
      )}
      {requests == 0 && <div>No Pending payments</div>}
    </div>
  );
};

export default BankUser;
