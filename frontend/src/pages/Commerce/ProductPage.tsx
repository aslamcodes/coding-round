import React, { useState } from "react";
import { useSocketContext } from "../../context/socket/socketContext";

const ProductPage = () => {
  const [status, setStatus] = useState<"paid" | "notI" | "declined">("notI");
  const { socket } = useSocketContext();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket && socket.emit("new request");
  };
  return (
    <div className="flex items-center h-screen">
      <img
        className="w-6/12"
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
      ></img>
      <form
        method="post"
        className="flex flex-col items-start grow"
        onSubmit={onSubmitHandler}
      >
        <h1 className="text-lg text-bold">Checkout</h1>
        <p>You'll be charged until you approve the order in the next screen</p>
        <div className="flex flex-col"></div>
        <button className="p-4 bg-black text-white rounded-lg ">
          Checkout
        </button>
        {status === "paid" && <div>Paid</div>}
        {status === "declined" && <div>Declined</div>}
        {status === "notI" && <div>Payment Not Initiated</div>}
      </form>
    </div>
  );
};

export default ProductPage;
