import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import CriarEquipe from "./pages/criarEquipe";

/* const theme = createTheme({
  primary: {
    main: "#F3A913",
    hoverMain: "#FEBC36",
    hoverSecundary: "rgba(243, 169, 19, 0.7)",
    disabled: "#565656",
    disabledHover: "#666666",
    delete: "#D32F2F",
    deleteHover: "#E63737",
    erro: "#ff0000",
    corret: "#4CAF50",
    placehold: "#BDBDBD",
  },
  secondary: {
    main: "#1B1B1B",
  },
});
 */
function App() {
  return (
    <AuthProvider>
      {/*       <ThemeProvider theme={theme}> */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/primeiroacesso" element={<PrimerioAcesso />} />
          <Route path="/primeiroacesso/criarequipe" element={<CriarEquipe />} />
        </Routes>
      </Router>
      {/*       </ThemeProvider> */}
    </AuthProvider>
  );
}

export default App;
