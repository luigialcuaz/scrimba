import React from "react";

export default function MessageList() {
  const DUMMY_DATA = [
    {
      senderId: "perborgen",
      text: "Hey, how is it going?",
    },
    {
      senderId: "janedoe",
      text: "Great! How about you?",
    },
    {
      senderId: "perborgen",
      text: "Good to hear! I am great as well",
    },
  ];
  return (
    <div className="message-list">
      {DUMMY_DATA.map((message, index) => {
        return <div>{message.text}</div>;
      })}
    </div>
  );
}
