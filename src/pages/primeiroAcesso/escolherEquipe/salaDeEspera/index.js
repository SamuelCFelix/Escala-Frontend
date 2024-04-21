import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

const styles = {
  container: {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto",
    background: "#000000",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "auto",
    overflowX: "hidden",
  },
  boxTitulo: {
    width: "384px",
    height: "72px",
    mb: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    margin: "4% 0%",
  },
  baseTitulo: {
    background: "#F3A913",
    width: "60%",
    height: "3.8%",
  },
  boxCenter: {
    width: "500px",
    height: "72%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxInfo: {
    width: "420px",
    height: "110px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "10px",
    border: "1px solid #F3A913",
    gap: "12px",
  },
  textoDefault: {
    fontSize: "14px",
    color: "#ffffff",
    lineHeight: "24px",
    letterSpacing: "0.17px",
  },
};
const SalaDeEspera = () => {
  useEffect(() => {
    const storedData = localStorage.getItem("login");

    const userData = JSON.parse(storedData);
    if (
      !userData?.usuarioDefaultId ||
      !(userData?.equipeId === "solicitacao enviada")
    ) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxTitulo}>
        <Typography sx={styles.titulo}>Sala de espera</Typography>
        <Box sx={styles.baseTitulo} />
      </Box>
      <Box sx={styles.boxCenter}>
        <Box sx={styles.boxInfo}>
          <Typography sx={{ ...styles.textoDefault, textAlign: "center" }}>
            Solicitação enviada com sucesso!
          </Typography>
          <Typography sx={{ ...styles.textoDefault, textAlign: "center" }}>
            Aguardando o líder da equipe confirmar sua entrada
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SalaDeEspera;
