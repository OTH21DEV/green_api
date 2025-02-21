import React from "react";
import "./ChatsList.css";
import convertTimestamp from "../../utils/formatTImestamp";

const ChatsList = ({ chats, handleSelectChat, isChatsListVisible }) => {
 console.log(chats)
  return (
    <>
      {Object.keys(chats).map((phone,index) => {
        const messages = chats[phone];
        const lastMessageText = messages.length > 0 ? messages[messages.length - 1].text : "";
        const time = messages.length > 0 ? messages[messages.length - 1].timestamp : "";

        return (
          <div className={`chats-list ${isChatsListVisible ? "visible" : ""}`} key={index}>
            <div className="chats-list__wrapper">
              <div key={phone} className="chats-list__item" onClick={() => handleSelectChat(phone)}>
                {phone}
              </div>
              <span>{time.length === 0 ? "" : convertTimestamp(time)}</span>
            </div>
            <span>{lastMessageText}</span>
          </div>
        );
      })}
    </>
  );
};

export default ChatsList;
