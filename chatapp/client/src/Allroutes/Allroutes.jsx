import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "../pages/Chatpage";
import HomePage from "../pages/Homepage";

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/chats" element={<ChatPage />}></Route>
      </Routes>
    </div>
  );
};
