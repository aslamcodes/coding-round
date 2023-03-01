import React from "react";

const CustomerLogin = () => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Todo: Server Things
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" placeholder="username"></input>
      <input type="password" placeholder="password"></input>
      <button type="submit">Login as Customer</button>
    </form>
  );
};

export default CustomerLogin;
