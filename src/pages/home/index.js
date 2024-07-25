import {
  Alert,
  Box,
  Snackbar,
  Tab,
  Tabs,
  Typography,
  tabsClasses,
} from "@mui/material";
import "../../../src/style.css";
import BackgroundImage from "../../img/fotoProducaoSamuel.jpeg";
import { useEffect, useState } from "react";
import Rodape from "../../components/rodape";
import PaginaGeral from "./paginaGeral";
import PaginaEquipe from "./PaginaEquipe";
import api from "../../api";

const styles = {
  configBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto, sans-serif",
    background: "#1B1B1B",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    overflow: "auto",
    position: "relative",
    overflow: "auto",
  },
  boxHome: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    mt: "64px",
  },
  estiloTabs: {
    [`& .${tabsClasses?.scrollButtons}`]: {
      color: "#F3A913",
      "&.Mui-disabled": { opacity: 0.3 },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#F3A913",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#F3A913",
    },
    background: "#000000",
    borderRadius: "100px",
    width: "202px",
    paddingLeft: "22px",
  },
  boxProximoCulto: {
    background: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "446px",
    height: "492px",
    borderRadius: "10px",
  },
};

const Home = () => {
  const autenticatedToken = localStorage?.getItem("token");
  const storedData = localStorage?.getItem("login");

  const [valueTab, setValueTab] = useState("Geral");
  const [user, setUser] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    if (!autenticatedToken || !storedData) {
      localStorage?.clear();
      window.location.href = "/login";
    } else {
      let userDataInitial = JSON?.parse(storedData);
      if (
        userDataInitial?.equipeId === null ||
        userDataInitial?.equipeId === "solicitacao enviada" ||
        userDataInitial?.equipeId === "sem equipe"
      ) {
        localStorage?.clear();
        window.location.href = "/login";
      } else {
        fetchData(autenticatedToken, storedData);
      }
    }
  }, [autenticatedToken, storedData]);

  const fetchData = async (autenticatedToken, storedData) => {
    const userToken = JSON?.parse(autenticatedToken);
    const userData = JSON?.parse(storedData);

    if (userToken && userData) {
      try {
        let response = "";

        if (userData?.usuarioHostId) {
          response = await api.post("/informacoesHome", {
            usuarioId: userData?.usuarioHostId,
            isHost: true,
          });
        } else if (userData?.usuarioDefaultId) {
          response = await api.post("/informacoesHome", {
            usuarioId: userData?.usuarioDefaultId,
            isHost: false,
          });
        }

        if (response?.status === 200) {
          setUser(response?.data);
          setLoadingPage(false);
        } else {
          setSnackbar("error", "Erro ao conectar com o servidor");
          console.error("erro ao executar ação", response?.status);
        }
      } catch (error) {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao buscar informações da Home: ", error);
      }
    }
  };

  const handleChangeTabs = (event, newValue) => {
    setValueTab(newValue);
  };

  const setSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.boxHome}>
          <Box sx={{ ...styles.configBox, margin: "12px 0px" }}>
            <Box sx={styles.boxTabs}>
              <Tabs
                value={valueTab}
                onChange={handleChangeTabs}
                variant="scrollable"
                indicatorColor="#F3A913"
                sx={styles.estiloTabs}
              >
                <Tab label="Geral" value="Geral" sx={{ color: "#ffffff" }} />
                <Tab label="Equipe" value="Equipe" sx={{ color: "#ffffff" }} />
              </Tabs>
            </Box>
          </Box>
          {!loadingPage && (
            <Box sx={{ display: "flex", width: "100%" }}>
              {valueTab === "Geral" && <PaginaGeral usuario={user} />}
              {valueTab === "Equipe" && <PaginaEquipe usuario={user} />}
            </Box>
          )}
          <Rodape />
        </Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          style={{
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};
export default Home;
