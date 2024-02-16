import {
  Box,
  Button,
  ButtonBase,
  Fade,
  Slide,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import imagemLider from "../../img/zs-lider.JPG";
import imagemServo from "../../img/zs-servo.JPG";
import { Fragment, useEffect, useState } from "react";

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
  },
  boxTitulo: {
    width: "25%",
    height: "10%",
    marginBottom: "30px",
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
    height: "3.5%",
  },
  boxTituloCards: {
    width: "25%",
    height: "10%",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  tituloCards: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    margin: "8% 0%",
  },
  baseTituloCards: {
    background: "#F3A913",
    width: "80%",
    height: "3.8%",
  },
  boxCenter: {
    width: "50%",
    height: "70%",
  },
  stackopcoes: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxButton: {
    position: "relative",
    backgroundImage: `url(${imagemLider})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    padding: "0px",
    borderRadius: "10px",
    /* color: "#000000", */
    color: "#F3A913",
    "&:hover": {
      opacity: 0.9,
    },
  },

  boxLider: {
    width: "49%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
  },
  boxServo: {
    background: "blue",
    width: "49%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
  },
  conteudoCards: {
    background: "#000000",
    opacity: "0.8 !important",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "90%",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  descricaoCards: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    bottom: "30%",
    left: 0,
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "1.25px",
  },
  boxSelecionar: {
    display: "flex",
    position: "absolute",
    bottom: "10%",
    width: "15%",
    height: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoSelecionar: {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    lineHeight: "34px",
    letterSpacing: "1.25px",
    color: "#ffffff",
    background: "#F3A913",
    "&:hover": {
      background: "#FEBC36",
    },
  },
};

const PrimerioAcesso = () => {
  const [selectLider, setSelectLider] = useState(false);

  const handleSelectLider = () => {
    setSelectLider(!selectLider);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxTitulo}>
        <Typography sx={styles.titulo}>Escolha o seu perfil</Typography>
        <Box sx={styles.baseTitulo} />
      </Box>
      <Box sx={styles.boxCenter}>
        <Stack direction={"row"} sx={styles.stackopcoes}>
          <Box sx={styles.boxLider}>
            <Button
              sx={{
                ...styles.boxButton,
                border: selectLider ? "4px solid #F3A913" : "none",
              }}
              onClick={() => {
                handleSelectLider();
              }}
            >
              <Box sx={styles.boxTituloCards}>
                <Typography sx={styles.tituloCards}>Líder</Typography>
                <Box sx={styles.baseTituloCards} />
              </Box>
              <Fade in={selectLider}>
                <Box sx={styles.conteudoCards}>
                  <Typography sx={styles.descricaoCards}>
                    perfil de liderança:
                    <br />
                    <br /> criará uma equipe e será responsável por administrar
                    as escalas e servos que fazem parte dela
                  </Typography>
                </Box>
              </Fade>
            </Button>
            <Fade in={selectLider}>
              <Box sx={styles.boxSelecionar}>
                <Button sx={styles.botaoSelecionar} onClick={() => {}}>
                  Selecionar
                </Button>
              </Box>
            </Fade>
          </Box>
          <Box sx={styles.boxServo}>
            <Box sx={styles.boxTituloCards}>
              <Typography sx={styles.tituloCards}>Servo</Typography>
              <Box sx={styles.baseTituloCards} />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default PrimerioAcesso;
