import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import React, { useState } from "react";

function App() {
  const [credentials, setCredentials] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setCredentials={setCredentials} />}></Route>
        <Route path="/chat" element={<Chat credentials={credentials} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
