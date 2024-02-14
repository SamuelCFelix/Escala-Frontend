import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./components/authContext";
import Login from "./pages/login/index";
import Cadastrar from "./pages/cadastrar/index";
import Home from "./pages/home/index";
import PrimerioAcesso from "./pages/primeiroAcesso";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/primeiroAcesso" element={<PrimerioAcesso />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
