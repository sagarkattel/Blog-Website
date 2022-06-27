import React from 'react'
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Route, Routes } from "react-router-dom";


function App() {
  const currentUser = false;
  return (
    <Routes>
      <Route path="/" element={<><Topbar /><Homepage /></>} />
        <Route index element={<><Topbar /><Homepage /></>} />
        <Route path="/setting" element={<><Topbar /><Settings /></>} />
        <Route path="/post/:id" element={<><Topbar /><Single /></>} />
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
        <Route path="/write" element={<><Topbar /><Write /></>} />
    </Routes>
  )
}

export default App;
