import React, { useState } from "react";
import { Form } from "react-router-dom";
const ProductPage = () => {
  const [status, setStatus] = useState<"paid" | "notI" | "declined">("notI");
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Todo: Server Things
  };
  return (
    <Form method="post" onSubmit={onSubmitHandler}>
      <p>Product name</p>
      <p>500rs</p>
      <button>Checkout</button>
      {status === "paid" && <div>Paid</div>}
      {status === "declined" && <div>Declined</div>}
      {status === "notI" && <div>Payment Not Initiated</div>}
    </Form>
  );
};

export default ProductPage;
