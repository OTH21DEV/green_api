import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ChatForm from "./ChatForm";

describe("ChatForm component", () => {
  let handleNewChatClick;
  let setPhoneNumber;
  let handleCreateChatSubmit;

  beforeEach(() => {
    handleNewChatClick = jest.fn();
    setPhoneNumber = jest.fn();
    handleCreateChatSubmit = jest.fn();
  });

  it("renders correctly input element for phone number", () => {
    render(<ChatForm handleNewChatClick={handleNewChatClick} setPhoneNumber={setPhoneNumber} handleCreateChatSubmit={handleCreateChatSubmit} phoneNumber="" />);

    expect(screen.getByPlaceholderText("Enter phone number")).toBeInTheDocument();
  });

  it("updates the phone number on change", () => {
    render(<ChatForm handleNewChatClick={handleNewChatClick} setPhoneNumber={setPhoneNumber} handleCreateChatSubmit={handleCreateChatSubmit} phoneNumber="" />);

    const input = screen.getByPlaceholderText("Enter phone number");
    fireEvent.change(input, { target: { value: "33766868943" } });
    expect(setPhoneNumber).toHaveBeenCalledWith("33766868943");
  });

  it("calls handleCreateChatSubmit on form submit when button - create chat- is clicked", () => {
    const { container } = render(<ChatForm handleNewChatClick={handleNewChatClick} setPhoneNumber={setPhoneNumber} handleCreateChatSubmit={handleCreateChatSubmit} phoneNumber="" />);

    const form = container.querySelector(".chat-form__body");
    fireEvent.submit(form);

    expect(handleCreateChatSubmit).toHaveBeenCalledTimes(1);
  });
  it("calls handleNewChatClick when click on chat back icon ", () => {
    render(<ChatForm handleNewChatClick={handleNewChatClick} setPhoneNumber={setPhoneNumber} handleCreateChatSubmit={handleCreateChatSubmit} phoneNumber="" />);
    const icon = screen.getByTitle("back");
    fireEvent.click(icon);
    expect(handleNewChatClick).toHaveBeenCalledTimes(1);
  });
});
