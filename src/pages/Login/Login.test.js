import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Login page component", () => {
  const setCredentialsMock = jest.fn();
  const navigateMock = jest.fn();

  beforeEach(() => {
    require("react-router-dom").useNavigate.mockImplementation(() => navigateMock);
  });

  it("renders login container", () => {
    const { container } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(container.firstChild).toHaveClass("wrapper");
  });

  it("updates input values on change", () => {
    render(
      <BrowserRouter>
        <Login setCredentials={setCredentialsMock} />
      </BrowserRouter>
    );

    const idInstance = screen.getByLabelText(/idInstance/i);
    const apiTokenInstance = screen.getByLabelText(/apiTokenInstance/i);

    fireEvent.change(idInstance, { target: { value: "12345" } });
    fireEvent.change(apiTokenInstance, { target: { value: "abcdef" } });

    expect(idInstance.value).toBe("12345");
    expect(apiTokenInstance.value).toBe("abcdef");
  });

  it("calls setCredentials and navigates on valid submit", () => {
    render(
      <BrowserRouter>
        <Login setCredentials={setCredentialsMock} />
      </BrowserRouter>
    );

    const idInstance = screen.getByLabelText(/idInstance/i);
    const apiTokenInstance = screen.getByLabelText(/apiTokenInstance/i);

    fireEvent.change(idInstance, { target: { value: "12345" } });
    fireEvent.change(apiTokenInstance, { target: { value: "abcdef" } });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(setCredentialsMock).toHaveBeenCalledWith({ idInstance: "12345", apiTokenInstance: "abcdef" });
    expect(navigateMock).toHaveBeenCalledWith("/chat");
  });
});
