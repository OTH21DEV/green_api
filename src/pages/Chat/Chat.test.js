import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Chat from "./Chat";

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query.includes("max-width: 1100px"),
    media: query,
    onchange: null,
    addListener: jest.fn(), // For deprecated API
    removeListener: jest.fn(), // For deprecated API
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

describe("Chat page component", () => {
  const credentials = { idInstance: "7105183429", apiTokenInstance: "zyueyruryuy" };
  it("renders Chat container", () => {
    const { container } = render(<Chat />);
    expect(container.firstChild).toHaveClass("chat-wrapper");
  });
});
