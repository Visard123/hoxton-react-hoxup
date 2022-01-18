
import { Route , Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";

export default function App() {
  return (
    <Routes>
<Route path={'/login'} element={<LoginPage/>}> </Route>
    </Routes>
  )
   
    
