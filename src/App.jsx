import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Homepage from "./pages/Homepage"
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory"
import Purchase from "./pages/Purchase"
import UserManagement from "./pages/UserManagement"
import Register from "./pages/Register";
import RegisterInput from "./pages/RegisterInput";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/inputdata" element={<RegisterInput />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/user management" element={<UserManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App