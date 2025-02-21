import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ChatConversation from "./ChatConversation";

const mockChats = {
  123456789: [{ text: "Hello", timestamp: Date.now(), status: "" }],
  987654321: [{ text: "Another chat", timestamp: Date.now(), status: "" }],
};

describe("ChatConversation component", () => {
  it("renders ChatConversation container", () => {
    const { container } = render(<ChatConversation chats={mockChats} activeChat="123456789" />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it("does not render ChatConversation container  when no active chat is present", () => {
    const { container } = render(<ChatConversation chats={mockChats} activeChat="" />);
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it("handles back icon click", () => {
    const setActiveChatMock = jest.fn();
    const setChatsListVisibleMock = jest.fn();
    render(<ChatConversation chats={mockChats} activeChat="123456789" setActiveChat={setActiveChatMock} setChatsListVisible={setChatsListVisibleMock} match={true} />);
    fireEvent.click(screen.getByTitle("back"));
    expect(setActiveChatMock).toHaveBeenCalled();
    expect(setChatsListVisibleMock).toHaveBeenCalledWith(true);
  });

  it("calls handleSendMessage on send icon click", () => {
    const handleSendMessageMock = jest.fn();

    render(
      <ChatConversation
        activeChat="123456789"
        chats={{ 123456789: [] }}
        sentMessage="Hello"
        handleSendMessage={handleSendMessageMock}
        setSentMessage={jest.fn()}
        handleKeyPress={jest.fn()}
        setActiveChat={jest.fn()}
        setChatsListVisible={jest.fn()}
        match={true}
      />
    );

    const inputElement = screen.getByPlaceholderText("Write a message");
    fireEvent.change(inputElement, { target: { value: "Testing" } });

    const sendIcon = screen.getByTitle("send");
    expect(sendIcon).toBeInTheDocument();

    fireEvent.click(sendIcon);

    expect(handleSendMessageMock).toHaveBeenCalled();
  });
  it("calls handleKeyPress on Enter key press", () => {
    const handleKeyPressMock = jest.fn();

    render(<ChatConversation chats={mockChats} activeChat="123456789" sentMessage="Hello" handleKeyPress={handleKeyPressMock} handleSendMessage={jest.fn()} setSentMessage={jest.fn()} match={true} />);

    const inputElement = screen.getByPlaceholderText("Write a message");
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(handleKeyPressMock).toHaveBeenCalled();
  });
  it("toggles chat list visibility on back icon click", () => {
    const setChatsListVisibleMock = jest.fn();

    render(<ChatConversation chats={mockChats} activeChat="123456789" setActiveChat={jest.fn()} setChatsListVisible={setChatsListVisibleMock} match={true} />);

    const backIcon = screen.getByTitle("back");
    fireEvent.click(backIcon);

    expect(setChatsListVisibleMock).toHaveBeenCalledWith(true);
  });
  it("renders microphone icon when input is not focused", () => {
    render(<ChatConversation chats={mockChats} activeChat="123456789" sentMessage="" handleSendMessage={jest.fn()} handleKeyPress={jest.fn()} match={true} />);

    const microIcon = screen.getByTitle("ptt");
    expect(microIcon).toBeInTheDocument();
  });
  it("updates input value when typed into", () => {
    const setSentMessageMock = jest.fn();

    render(<ChatConversation chats={mockChats} activeChat="123456789" sentMessage="" setSentMessage={setSentMessageMock} handleSendMessage={jest.fn()} handleKeyPress={jest.fn()} match={true} />);

    const inputElement = screen.getByPlaceholderText("Write a message");
    fireEvent.change(inputElement, { target: { value: "New Message" } });

    expect(setSentMessageMock).toHaveBeenCalledWith("New Message");
  });
});
