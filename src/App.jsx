import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Homepage from "./pages/Homepage"
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory"
import Purchase from "./pages/Purchase"
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/user management" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App