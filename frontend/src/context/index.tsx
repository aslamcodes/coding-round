import React, { PropsWithChildren } from "react";
import SocketContextProvider from "./socket/socketContext";

const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <SocketContextProvider>{children}</SocketContextProvider>;
};

export default ContextProvider;
