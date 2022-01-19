import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainApp from "./Pages/MainApp";
export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="logged-in " element={<MainApp />} />
      </Routes>
    </div>
  );
}
