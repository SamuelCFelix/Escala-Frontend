import { Box, Tab, Tabs, Typography, tabsClasses } from "@mui/material";
import "../../../src/style.css";
import BackgroundImage from "../../img/fotoProducaoSamuel.jpeg";
import { useEffect, useState } from "react";
import Rodape from "../../components/rodape";
import PaginaGeral from "./paginaGeral";
import PaginaEquipe from "./PaginaEquipe";

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
  const [valueTab, setValueTab] = useState("Geral");
  const autenticated = localStorage?.getItem("token");

  /* useEffect(() => {
    if (!autenticated) {
      window.location.href = "/login";
    }
  }, [autenticated]); */

  const handleChangeTabs = (event, newValue) => {
    setValueTab(newValue);
  };

  return (
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
        <Box sx={{ display: "flex", width: "100%" }}>
          {valueTab === "Geral" && <PaginaGeral />}
          {valueTab === "Equipe" && <PaginaEquipe />}
        </Box>
        <Rodape />
      </Box>
    </Box>
  );
};
export default Home;
