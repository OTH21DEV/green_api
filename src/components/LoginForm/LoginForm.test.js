import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import LoginForm from "./LoginForm";

describe("LoginForm component", () => {
  let onChange;
  let onSubmit;

  beforeEach(() => {
    onChange = jest.fn();
    onSubmit = jest.fn((e) => e.preventDefault());
  });

  it("renders the LoginForm container", () => {
    const { container } = render(<LoginForm onChange={onChange} onSubmit={onSubmit} credentials={{ idInstance: "", apiTokenInstance: "" }} errorMessage={{ idInstance: "", apiTokenInstance: "" }} />);
    expect(container.firstChild).toHaveClass("login-form-wrapper");
  });

  it("calls onChange in the input idInstance", () => {
    render(<LoginForm onChange={onChange} onSubmit={onSubmit} credentials={{ idInstance: "", apiTokenInstance: "" }} errorMessage={{ idInstance: "", apiTokenInstance: "" }} />);
    const input = screen.getByLabelText("idInstance");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("calls onChange in the input apiTokenInstance", () => {
    render(<LoginForm onChange={onChange} onSubmit={onSubmit} credentials={{ idInstance: "", apiTokenInstance: "" }} errorMessage={{ idInstance: "", apiTokenInstance: "" }} />);
    const input = screen.getByLabelText("apiTokenInstance");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("calls onSubmit when the login form is submitted", () => {
    render(<LoginForm onChange={onChange} onSubmit={onSubmit} credentials={{ idInstance: "", apiTokenInstance: "" }} errorMessage={{ idInstance: "", apiTokenInstance: "" }} />);

    const button = screen.getByRole("button", { name: /login/i });

    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("displays the error message for idInstance", () => {
    render(<LoginForm onChange={onChange} onSubmit={onSubmit} credentials={{ idInstance: "", apiTokenInstance: "" }} errorMessage={{ idInstance: "error for idInstance", apiTokenInstance: "" }} />);

    expect(screen.getByText("error for idInstance")).toBeInTheDocument();
  });
  it("displays the error message for apiTokenInstance", () => {
    render(
      <LoginForm onChange={onChange} onSubmit={onSubmit} credentials={{ idInstance: "", apiTokenInstance: "" }} errorMessage={{ idInstance: "", apiTokenInstance: "error for apiTokenInstance" }} />
    );

    expect(screen.getByText("error for apiTokenInstance")).toBeInTheDocument();
  });
});
