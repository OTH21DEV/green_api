import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ChatsList from "./ChatsList";

const mockhandleSelectChat = jest.fn();

const mockChats = {
  123456789: [{ text: "Hello", timestamp: Date.now(), status: "" }],
  987654321: [{ text: "Another chat", timestamp: Date.now(), status: "" }],
};

describe("ChatsList component", () => {
  it("renders ChatsList container", () => {
    const { container } = render(<ChatsList handleSelectChat={mockhandleSelectChat} chats={mockChats} />);
    expect(container.firstChild).toHaveClass("chats-list");
  });

  it("renders chat items based on chats props", () => {
    const { container } = render(<ChatsList handleSelectChat={mockhandleSelectChat} chats={mockChats} />);

    const chatItems = container.querySelectorAll(".chats-list__item");
    expect(chatItems).toHaveLength(Object.keys(mockChats).length);
  });

  it("handles empty message chats array", () => {
    const emptyChats = {
      123456789: [],
      987654321: [],
    };
    render(<ChatsList handleSelectChat={mockhandleSelectChat} chats={emptyChats} />);
    expect(screen.getByText("123456789")).toBeInTheDocument();
    expect(screen.getByText("987654321")).toBeInTheDocument();
  });

  it("calls handleSelectChat with phone number when a chat item is clicked", () => {
    render(<ChatsList handleSelectChat={mockhandleSelectChat} chats={mockChats} />);
    const chatNumber = screen.getByText("123456789");
    fireEvent.click(chatNumber);
    expect(mockhandleSelectChat).toHaveBeenCalledWith("123456789");
  });

  it("applies visible class when isChatsVisivble is true", () => {
    render(<ChatsList handleSelectChat={mockhandleSelectChat} chats={mockChats} isChatsListVisible={true} />);
    const chatNumber = screen.getByText("123456789").closest(".chats-list");
    expect(chatNumber).toHaveClass("visible");
  });
  it("doesnt apply visible class when isChatVisible is false", () => {
    render(<ChatsList handleSelectChat={mockhandleSelectChat} chats={mockChats} isChatsListVisible={false} />);
    const chatNumber = screen.getByText("123456789").closest(".chats-list");
    expect(chatNumber).not.toHaveClass("visible");
  });
});
