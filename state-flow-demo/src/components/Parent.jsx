import { useState } from "react";
import { ChildInput, ChildPreview } from "./Child";
import Display from "./Display";

function Parent() {
  const [message, setMessage] = useState("Message From Parent");

  const updateMessage = (newMsg) => {
    setMessage(newMsg);
  };

  return (
    <div style={{ padding: "22px" }}>
      <h1>State Flow Demo</h1>

      <ChildInput onUpdate={updateMessage} />
      <ChildPreview message={message} />
      <Display message={message} />
    </div>
  );
}

export default Parent;