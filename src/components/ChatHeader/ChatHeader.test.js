import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ChatHeader from "./ChatHeader";

describe("ChatHeader component", () => {
  it("should renders the ChatHeader container", () => {
    const { container } = render(<ChatHeader />);
    expect(container.firstChild).toHaveClass("new-chat-heading");
  });

  it("contains the SVG elements", () => {
    render(<ChatHeader />);

    expect(screen.getByTitle("new-chat-outline")).toBeInTheDocument();
    expect(screen.getByTitle("menu")).toBeInTheDocument();
  });

  it("calls handleNewChatClick when chat icon is clicked", () => {
    const handleNewChatClickMock = jest.fn();
    render(<ChatHeader handleNewChatClick={handleNewChatClickMock} />);
    const chatIcon = screen.getByTitle("new-chat-outline");
    fireEvent.click(chatIcon);
    expect(handleNewChatClickMock).toHaveBeenCalledTimes(1);
  });
});
