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
import { motion } from "framer-motion";
import "../../../src/style.css";
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
    position: "relative",
    justifyContent: "center",
  },
  boxServo: {
    width: "49%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    position: "relative",
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
    bottom: "7%",
    width: "100%",
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoSelecionar: {
    display: "flex",
    position: "absolute",
    width: "50%",
    height: "100%",
    left: "25%",
    alignItems: "center",
    justifyContent: "center",
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

const PrimerioAcesso = () => {
  const [selectLider, setSelectLider] = useState(false);
  const [selectServo, setSelectServo] = useState(false);

  const handleSelectLider = () => {
    setSelectLider(!selectLider);
    if (selectServo) {
      setSelectServo(false);
    }
  };
  const handleSelectServo = () => {
    setSelectServo(!selectServo);
    if (selectLider) {
      setSelectLider(false);
    }
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
            <motion.div
              className="motionDiv"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <Button
                sx={{
                  ...styles.boxButton,
                  backgroundImage: `url(${imagemLider})`,
                  border: selectLider
                    ? "4px solid #F3A913"
                    : "4px solid #ffffff",
                }}
                onClick={handleSelectLider}
              >
                <Box sx={styles.boxTituloCards}>
                  <Typography sx={styles.tituloCards}>Líder</Typography>
                  <Box sx={styles.baseTituloCards} />
                </Box>
                <motion.div
                  className="motionDiv"
                  initial={{ height: "0px", opacity: 0 }}
                  animate={selectLider ? { height: "100%", opacity: 1 } : ""}
                  transition={{ delay: 0.1, ease: "easeInOut" }}
                >
                  <Box sx={styles.conteudoCards}>
                    <Typography sx={styles.descricaoCards}>
                      perfil de liderança:
                      <br />
                      <br /> criará uma equipe e será responsável por
                      administrar as escalas e servos que fazem parte dela
                    </Typography>
                  </Box>
                </motion.div>
              </Button>
              {selectLider && (
                <Box sx={styles.boxSelecionar}>
                  <motion.div
                    className="motionDiv"
                    initial={{ opacity: 0 }}
                    animate={selectLider ? { opacity: 1 } : { opacity: 0 }}
                    transition={
                      selectLider
                        ? { delay: 0.3, ease: "easeInOut" }
                        : { delay: 0, ease: "easeInOut" }
                    }
                  >
                    <Button
                      disabled={!selectLider}
                      sx={styles.botaoSelecionar}
                      onClick={() => {
                        window.location.href = "/primeiroAcesso/criarequipe";
                      }}
                    >
                      Escolher
                    </Button>
                  </motion.div>
                </Box>
              )}
            </motion.div>
          </Box>
          <Box sx={styles.boxServo}>
            <motion.div
              className="motionDiv"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <Button
                sx={{
                  ...styles.boxButton,
                  backgroundImage: `url(${imagemServo})`,
                  border: selectServo
                    ? "4px solid #F3A913"
                    : "4px solid #ffffff",
                }}
                onClick={handleSelectServo}
              >
                <Box sx={styles.boxTituloCards}>
                  <Typography sx={styles.tituloCards}>Servo</Typography>
                  <Box sx={styles.baseTituloCards} />
                </Box>
                <motion.div
                  className="motionDiv"
                  initial={{ height: "0px", opacity: 0 }}
                  animate={selectServo ? { height: "100%", opacity: 1 } : ""}
                  transition={{ delay: 0.1, ease: "easeInOut" }}
                >
                  <Box sx={styles.conteudoCards}>
                    <Typography sx={styles.descricaoCards}>
                      perfil de servo:
                      <br />
                      <br />
                      entrará em uma equipe e será responsável por informar sua
                      disponibilidade para criação da escala
                    </Typography>
                  </Box>
                </motion.div>
              </Button>
              {selectServo && (
                <Box sx={styles.boxSelecionar}>
                  <motion.div
                    className="motionDiv"
                    initial={{ opacity: 0 }}
                    animate={selectServo ? { opacity: 1 } : { opacity: 0 }}
                    transition={
                      selectServo
                        ? { delay: 0.3, ease: "easeInOut" }
                        : { delay: 0, ease: "easeInOut" }
                    }
                  >
                    <Button sx={styles.botaoSelecionar} onClick={() => {}}>
                      Escolher
                    </Button>
                  </motion.div>
                </Box>
              )}
            </motion.div>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default PrimerioAcesso;
