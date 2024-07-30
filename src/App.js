import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./components/popUpCadastro/authContext";
import Login from "./pages/login/index";
import Cadastrar from "./pages/cadastrar/index";
import Home from "./pages/home/index";
import PrimerioAcesso from "./pages/primeiroAcesso";
import CriarEquipe from "./pages/primeiroAcesso/criarEquipe";
import EscolherEquipe from "./pages/primeiroAcesso/escolherEquipe";
import SalaDeEspera from "./pages/primeiroAcesso/escolherEquipe/salaDeEspera";
import LayoutBar from "./components/layoutBar";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3A913",
      hoverMain: "#FEBC36",
      hoverSecundary: "rgba(243, 169, 19, 0.7)",
      atention: "#FF8C00",
      disabled: "#565656",
      disabledHover: "#666666",
      delete: "#D32F2F",
      deleteHover: "#E63737",
      error: "#ff0000",
      correct: "#4CAF50",
      placeholder: "#BDBDBD",
    },
    secondary: {
      main: "#1B1B1B",
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/primeiroacesso" element={<PrimerioAcesso />} />
            <Route
              path="/primeiroacesso/criarequipe"
              element={<CriarEquipe />}
            />
            <Route
              path="/primeiroacesso/escolherequipe"
              element={<EscolherEquipe />}
            />
            <Route
              path="/primeiroacesso/escolherequipe/saladeespera"
              element={<SalaDeEspera />}
            />

            <Route path="/" element={<LayoutBar />}>
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
