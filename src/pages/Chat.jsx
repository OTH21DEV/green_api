import React, { useState, useEffect } from "react";
import ChatHeader from "../components/ChatHeader/ChatHeader";
import ChatFilter from "../components/ChatFilter/ChatFilter";
import ChatSearch from "../components/ChatSearch/ChatSearch";
import ChatForm from "../components/ChatForm/ChatForm";
import receiveNotification, { deleteNotification, sendMessage } from "../services/message.js";
import formatMessage from "../utils/formatData.js";
import ChatsList from "../components/ChatsList/ChatsList";
import ChatConversation from "../components/ChatConversation/ChatConversation.jsx";

const Chat = ({ credentials }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [isNewChatClick, setIsNewChatClick] = useState(false);
  const [chats, setChats] = useState({});
  const [activeChat, setActiveChat] = useState(null);

  const [sentMessage, setSentMessage] = useState("");
  const [isChatsListVisible, setChatsListVisible] = useState(false);
  const [match, setMatch] = useState(window.matchMedia("(max-width: 1100px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:1100px)");
    const handleResize = (e) => setMatch(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleNewChatClick = () => {
    setIsNewChatClick((prevState) => !prevState);
    //show chats list in large screen
    if (!match) {
      setChatsListVisible(true);
    }
    //hide for mobile
    else {
      setChatsListVisible(false);
    }
  };

  const handleCreateChatSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber && !chats[phoneNumber]) {
      setChats({ ...chats, [phoneNumber]: [] });
      setActiveChat(phoneNumber);
      setPhoneNumber("");
      setIsNewChatClick((prevState) => !prevState);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const result = await sendMessage(credentials, {
        chatId: activeChat + "@c.us",

        message: sentMessage,
      });
      if (result) {
        const timestamp = Date.now();

        const newMessage = {
          text: sentMessage,
          timestamp: timestamp,
          status: "sent",
        };
        setChats((prevChats) => ({
          ...prevChats,
          [activeChat]: [...(prevChats[activeChat] || []), newMessage],
        }));
        setSentMessage("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(e);
    }
  };

  //from chatslist
  const handleSelectChat = (phone) => {
    setActiveChat(phone);
    // setChatsListVisible((prevState) => !prevState);
    setChatsListVisible(true);
  };

  useEffect(() => {
    let intervalId;

    const fetchReceivedMessage = async () => {
      try {
        if (!activeChat) return;

        const response = await receiveNotification(credentials);

        if (!response || !response.body || response == null) {
          console.log("No new messages or invalid response.");
          return;
        }

        let formattedMessages = formatMessage(response);

        if (!formattedMessages) {
          return;
        }

        if (formattedMessages.text && formattedMessages.text !== "No Text Available") {
          formattedMessages.timestamp = formattedMessages.timestamp.toString().length <= 10 ? formattedMessages.timestamp * 1000 : formattedMessages.timestamp;

          setChats((prevChats) => {
            const chatMessages = prevChats[formattedMessages.from] || [];

            // Check for duplicate messages based on timestamp
            const isDuplicate = chatMessages.some((msg) => msg.timestamp === formattedMessages.timestamp);

            if (isDuplicate) {
              return prevChats;
            }

            const updatedChat = [...chatMessages, formattedMessages];

            return {
              ...prevChats,
              [formattedMessages.from]: updatedChat,
            };
          });
        }

        const deleteResult = await deleteNotification(credentials, formattedMessages.receiptId);

        if (deleteResult) {
          console.log(`Notification ${formattedMessages.receiptId} successfully deleted`);
        } else {
          console.log("Failed to delete notification");
        }
      } catch (err) {
        console.error("Error fetching message:", err);
      }
    };

    if (activeChat) {
      intervalId = setInterval(fetchReceivedMessage, 5000);
    }

    return () => clearInterval(intervalId);
  }, [activeChat, credentials]);

  return (
    <section className="chat-wrapper">
      {/** Conditionally render the chat elements*/}

      {!activeChat && match ? (
        <>
          <ChatHeader handleNewChatClick={handleNewChatClick} />
          <ChatSearch />
          <ChatFilter />
          <ChatsList chats={chats} activeChat={activeChat} handleSelectChat={handleSelectChat} isChatsListVisible={isChatsListVisible} />
        </>
      ) : null}

      {!match ? (
        <div className="chat-tools">
          <ChatHeader handleNewChatClick={handleNewChatClick} />
          <ChatSearch />
          <ChatFilter />
          <ChatsList chats={chats} activeChat={activeChat} handleSelectChat={handleSelectChat} isChatsListVisible={isChatsListVisible} />
        </div>
      ) : null}

      <div className={`new-chat-form-wrapper ${isNewChatClick ? "active" : ""}`}>
        {/* Content of the ChatForm  */}
        <ChatForm handleNewChatClick={handleNewChatClick} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} handleCreateChatSubmit={handleCreateChatSubmit} />
      </div>

      <ChatConversation
        chats={chats}
        setActiveChat={setActiveChat}
        activeChat={activeChat}
        sentMessage={sentMessage}
        setSentMessage={setSentMessage}
        handleSendMessage={handleSendMessage}
        handleKeyPress={handleKeyPress}
        setChatsListVisible={setChatsListVisible}
        match={match}
      />
    </section>
  );
};

export default Chat;
