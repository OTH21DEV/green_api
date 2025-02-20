import { render } from "@testing-library/react";
import React from "react";
import Logo from "./Logo";

describe("Logo component", () => {
  it("renders the logo container", () => {
    const { container } = render(<Logo />);

    expect(container.firstChild).toHaveClass("logo");
  });

  it("contains the SVG elements", () => {
    const { getByTitle } = render(<Logo />);
    expect(getByTitle("wa-logo")).toBeInTheDocument();
    expect(getByTitle("wa-wordmark")).toBeInTheDocument();
  });
});
