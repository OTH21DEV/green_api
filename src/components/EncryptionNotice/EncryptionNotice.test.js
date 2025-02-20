import { render } from "@testing-library/react";
import React from "react";
import EncryptionNotice from "./EncryptionNotice";

describe("EncryptionNotice component", () => {
  it("renders the encryptionNotice container", () => {
    const { container } = render(<EncryptionNotice />);
    expect(container.firstChild).toHaveClass("notice");
  });
  it("contains the SVG element", () => {
    const { getByTitle } = render(<EncryptionNotice />);
    expect(getByTitle("lock-outline")).toBeInTheDocument();
  });
});
