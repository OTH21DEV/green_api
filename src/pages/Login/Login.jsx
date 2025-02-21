import React, { useState } from "react";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import EncryptionNotice from "../../components/EncryptionNotice/EncryptionNotice";
import { useNavigate } from "react-router-dom";
// import { handleAuth } from "../services/auth";

const Login = ({ setCredentials }) => {
  const [credentialsForm, setCredentialsForm] = useState({
    idInstance: "",
    apiTokenInstance: "",
  });

  const [errorMessage, setErrorMessage] = useState({});

  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentialsForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateCredentials = ({ idInstance, apiTokenInstance }) => {
    const errors = {};

    if (!idInstance || isNaN(Number(idInstance))) {
      errors.idInstance = "Please enter a valid number";
    }
    if (!apiTokenInstance) {
      errors.apiTokenInstance = "Please enter a valid number";
    }

    setErrorMessage(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCredentials(credentialsForm)) {
      setCredentials(credentialsForm);
      navigate("/chat");
      setCredentialsForm({
        idInstance: "",
        apiTokenInstance: "",
      });
    }
  };

  return (
    <section className="wrapper">
      <Header />
      <LoginForm credentials={credentialsForm} onChange={handleInputChange} errorMessage={errorMessage} onSubmit={handleSubmit} />
      <EncryptionNotice />
    </section>
  );
};
export default Login;
