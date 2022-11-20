import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Homepage from "./pages/Homepage"
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory"
import Purchase from "./pages/Purchase"
import UserManagement from "./pages/UserManagement"
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/user management" element={<UserManagement />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App