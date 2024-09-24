import { Box, Button, Typography } from "@mui/material";
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
    justifyContent: "flex-start",
    overflowY: "auto",
    overflowX: "hidden",
  },
  boxTitulo: {
    width: "384px",
    height: "72px",
    mb: "16px",
    mt: "64px",
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
    width: "100dvw",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  },
  boxInfo: {
    width: "90dvw",
    maxWidth: "420px",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "10px",
    border: "1px solid #F3A913",
    gap: "12px",
    padding: "14px 0px",
  },
  textoDefault: {
    fontSize: "14px",
    color: "#ffffff",
    lineHeight: "24px",
    letterSpacing: "0.17px",
  },
  botaoDefault: {
    display: "flex",
    width: "auto",
    height: "30px",
    padding: "0px 40px",
    borderRadius: "10px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "12px",
    lineHeight: "36px",
    letterSpacing: "1.25px",
    color: "#ffffff",
    background: "#F3A913",
    "&:hover": {
      background: "#FEBC36",
    },
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
      localStorage.clear();
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
        <Button
          sx={styles.botaoDefault}
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          Voltar para a tela inicial
        </Button>
      </Box>
    </Box>
  );
};

export default SalaDeEspera;
