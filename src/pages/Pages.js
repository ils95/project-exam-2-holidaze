import Home from "./Home";
import Browse from "./Browse";
import Detail from "./Detail";
import Login from "./Login";
import Admin from "./Admin";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

function Pages() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </AuthProvider>
  );
}

export default Pages;
