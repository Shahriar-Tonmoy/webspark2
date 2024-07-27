// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useRef, useState } from 'react';

const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    if (!socketRef.current) {
      const newSocket = new WebSocket(url);

      newSocket.onopen = () => {
        setSocket(newSocket);
        socketRef.current = newSocket;
      };

      newSocket.onclose = () => {
        setSocket(null);
        socketRef.current = null;
      };

      newSocket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url]);

  return socket;
};

export default useWebSocket;