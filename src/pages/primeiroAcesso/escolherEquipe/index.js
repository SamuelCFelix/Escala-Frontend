import { Box, Typography } from "@mui/material";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";

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
    overflow: "auto",
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
    minHeight: "500px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "10px",
    gap: "16px",
  },
  boxEquipe: {
    width: "400px",
    minHeight: "120px",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
    border: "1px solid #F3A913",
    position: "relative",
    overflow: "hidden",
  },
  etiqueta: {
    position: "absolute",
    top: "-20px",
    left: "-20px",
    width: "70px",
    height: "70px",
    backgroundColor: "#F3A913",
    borderTopLeftRadius: "50px",
    clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 120%)",
  },
  boxBaseEquipe: {
    background: "green",
    width: "100%",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const EscolherEquipe = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxTitulo}>
        <Typography sx={styles.titulo}>Escolha o seu perfil</Typography>
        <Box sx={styles.baseTitulo} />
      </Box>
      <Box sx={styles.boxCenter}>
        <Box sx={styles.boxEquipe}>
          <Box sx={styles.etiqueta} />
          <Box
            sx={{
              ...styles.boxTitulo,
              background: "red",
              mb: "0px",
              width: "100%",
              height: "100%",
            }}
          >
            <ControlCameraIcon
              sx={{ color: "#F3A913", fontSize: "18px", mb: "-10px" }}
            />
            <Typography sx={styles.titulo}>Filmagem</Typography>
            <Box sx={{ ...styles.baseTitulo, width: "85%" }} />
          </Box>
          <Box sx={styles.boxBaseEquipe}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EscolherEquipe;
