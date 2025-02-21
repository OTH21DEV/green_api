import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App Component", () => {
  test("renders Login page by default", () => {
    render(<App />);
    expect(screen.getByText(/Your personal messages are end-to-end encrypted/i)).toBeInTheDocument();
  });

  test("navigates to Chat page on valid credentials", () => {
    const { container } = render(<App />);

    expect(container.firstChild).toHaveClass("wrapper");
  });
});
