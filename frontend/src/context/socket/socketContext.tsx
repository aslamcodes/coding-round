import io from "socket.io-client";
import React, { PropsWithChildren } from "react";
import { createContext, useCallback, useContext, useState } from "react";

const SocketContext = createContext({
  connect: () => {},
  disconnect: () => {},
  socket: null,
});

const SocketContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] = useState<any>(null);

  const connect = useCallback((options = {}) => {
    const sk = io("http://localhost:8000");

    sk.connect();

    setSocket(sk);
  }, []);

  const disconnect = useCallback(() => {
    if (socket) socket.close();
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket, connect, disconnect }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  const context = useContext(SocketContext);

  if (!context)
    throw new Error(
      "useSocketContext Hook must be defined within a context provider"
    );

  return context;
};

export default SocketContextProvider;
