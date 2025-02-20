import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ChatFilter from "./ChatFilter";

describe("ChatFilter component ", () => {
  it("renders the chat filter nav element", () => {
    render(<ChatFilter />);

    const nav = document.querySelector(".chat-filter");
    expect(nav).toBeInTheDocument();
  });
  it("renders all chat filter list item", () => {
    render(<ChatFilter />);

    const allItem = screen.getByText("All");
    expect(allItem).toBeInTheDocument();

    const unreadedItem = screen.getByText("Unreaded");
    expect(unreadedItem).toBeInTheDocument();

    const favoriteItem = screen.getByText("Favorite");
    expect(favoriteItem).toBeInTheDocument();

    const groupesItem = screen.getByText("Groupes");
    expect(groupesItem).toBeInTheDocument();
  });

  it("renders the archived section with title and count", () => {
    render(<ChatFilter />);

    const archivedTitle = screen.getByText("Archived");
    expect(archivedTitle).toBeInTheDocument();

    const archivedCount = screen.getByText("2");
    expect(archivedCount).toBeInTheDocument();
  });
});
