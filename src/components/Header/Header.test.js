import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("Header component", () => {
  it("renders the header container", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass("header");
  });
  it("renders the Logo component", () => {
    const { container } = render(<Header />);
    const logoElement = container.querySelector(".logo");
    expect(logoElement).toBeInTheDocument();
  });
});
