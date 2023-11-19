import React, { useEffect, useState } from "react";
import { createConnection } from "./chat";
import { showNotification } from "./notification";
import { useChatRoom } from "./useChatRoom";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");
  useChatRoom({
    roomId,
    serverUrl,
  });
  return (
    <>
      <label>
        Server URL :
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default ChatRoom;
