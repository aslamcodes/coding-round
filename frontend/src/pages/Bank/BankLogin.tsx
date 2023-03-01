import React from "react";
import { Form } from "react-router-dom";

const BankLogin = () => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Todo: Server Things
  };
  return (
    <Form method="post" onSubmit={onSubmitHandler}>
      <input type="text" placeholder="username"></input>
      <input type="password" placeholder="password"></input>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default BankLogin;
