import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ChatSearch from "./ChatSearch";

describe("ChatSearch component", () => {
  it("renders the chatSearch form", () => {
    const { container } = render(<ChatSearch />);

    expect(container.firstChild).toHaveClass("new-chat-search-bar");
  });

  it("contains the SVG element", () => {
    render(<ChatSearch />);

    expect(screen.getByTitle("search")).toBeInTheDocument();
  });

  it("contains the input element", () => {
    render(<ChatSearch />);

    const input = screen.getByPlaceholderText("Search");

    expect(input).toBeInTheDocument();
  });

  it("updates the search value when user types", () => {
    render(<ChatSearch />);

    const input = screen.getByPlaceholderText("Search");

    fireEvent.change(input, { target: { value: "test search" } });

    expect(input.value).toBe("test search");
  });
});
