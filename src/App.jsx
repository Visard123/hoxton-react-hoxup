import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainApp from "./Pages/MainApp";
import NotFound from "./Pages/NotFound";
export default function App() {
  const [modal, setModal] = useState("");
  return (
    <div className="app">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/logged-in" element={<MainApp />} />
        <Route path="/logged-in/:conversationId" element={<MainApp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
