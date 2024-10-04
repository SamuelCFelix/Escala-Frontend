import {
  Alert,
  Backdrop,
  Box,
  Button,
  ButtonBase,
  Fade,
  IconButton,
  Modal,
  Slide,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import "../../../src/style.css";
import imagemPastor from "../../img/zs-pastor.jpg";
import imagemServo from "../../img/zs-vini.png";
import { useEffect, useState } from "react";
import api from "../../api";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Close, Padding } from "@mui/icons-material";
import useDeviceType from "../../hooks/useDeviceType";
import { useMediaQuery } from "react-responsive";

const styles = {
  container: {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto",
    background: "#000000",
    width: "100dvw",
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
  },
  boxTitulo: {
    width: "384px",
    height: "100px",
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
    height: "2px",
  },
  boxTituloCards: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    position: "absolute",
    top: 14,
    zIndex: 10,
  },
  tituloCards: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
  },
  baseTituloCards: {
    background: "#F3A913",
    width: "130%",
    height: "2px",
  },
  boxCenter: {
    width: "98dvw",
    minHeight: "70dvh",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    mt: "10px",
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
    color: "#F3A913",
  },

  boxCardsButton: {
    width: "446px",
    maxWidth: "90dvw",
    height: "487px",
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
    height: "86%",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  descricaoCards: {
    position: "absolute",
    display: "flex",
    width: "90%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    bottom: "30%",
    left: "5%",
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
  botaoDefault: {
    display: "flex",
    width: "140px",
    height: "30px",
    padding: "0px 40px",
    borderRadius: "5px",
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
  textoDefault: {
    fontSize: "14px",
    color: "#ffffff",
    lineHeight: "24px",
    letterSpacing: "0.17px",
  },
  textField: {
    display: "flex",
    width: "100%",
    "& input": {
      color: "#ffffff",
    },
    "& .MuiInputLabel-root": {
      color: "#BDBDBD",
      "&.MuiInputLabel-shrink": {
        color: "#ffffff",
      },
    },
    "& .MuiSelect-icon": {
      color: "#ffffff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F3A913",
      },
      "&:hover fieldset": {
        borderColor: "#F3A913",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#F3A913",
      },
      "& .MuiInputBase-input": {
        color: "#ffffff",
      },
    },
    "& .MuiMenuItem-root.Mui-selected": {
      color: "#ffffff",
    },
    "& .MuiSvgIcon-root": {
      color: "#ffffff",
    },
    "& .MuiOutlinedInput-root .MuiSelect-select": {
      textAlign: "center",
    },
  },
  boxModalAvisos: {
    backgroundColor: "#1B1B1B",
    border: "1px solid #F3A913",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "290px",
    height: "280px",
    boxShadow: 24,
  },
  boxConteudoModalAvisos: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
  },
  boxAreaTituloModalAvisos: {
    width: "100%",
    height: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "-6px",
  },
  boxTituloModalAvisos: {
    width: "220px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tituloModalAvisos: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    margin: "6% 0%",
  },
  baseTituloModalAvisos: {
    background: "#F3A913",
    width: "100%",
    height: "3.5%",
  },
  boxButtonTelaInicial: {
    width: "100dvw",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const PrimerioAcesso = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [selectLider, setSelectLider] = useState(false);
  const [selectServo, setSelectServo] = useState(false);
  const [openModalAutorizacao, setOpenModalAutorizacao] = useState(false);
  const [openModalSelectServo, setOpenModalSelectServo] = useState(false);
  const [valuePassword, setValuePassword] = useState("");
  const [usuarioPerfilId, setUsuarioPerfilId] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("login");

    const userData = JSON.parse(storedData);
    if (userData?.usuarioPerfilId) {
      setUsuarioPerfilId(userData.usuarioPerfilId);
    } else {
      localStorage?.clear();
      window.location.href = "/login";
    }
  }, []);

  async function handleApiPasswordAutorization() {
    try {
      const response = await api.post("/usuario/createUsuarioHost", {
        senha: valuePassword,
        usuarioPerfilId,
      });
      if (response.status === 201) {
        localStorage.setItem("login", JSON.stringify(response.data));
        window.location.href = "/primeiroAcesso/criarequipe";
      }
    } catch (error) {
      setSnackbar("error", "Acesso negado");
    }
  }

  async function handleApiSelectServo() {
    try {
      const response = await api.post("/usuario/createUsuarioDefault", {
        usuarioPerfilId,
      });
      if (response.status === 201) {
        localStorage.setItem("login", JSON.stringify(response.data));
        window.location.href = "/primeiroAcesso/escolherequipe";
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
    }
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const setSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

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

  const handleCloseModal = () => {
    setOpenModalAutorizacao(false);
    setOpenModalSelectServo(false);
    setValuePassword("");
  };

  //APERTAR ENTER
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleApiPasswordAutorization();
    }
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxTitulo}>
        <Typography sx={styles.titulo}>Escolha o seu perfil</Typography>
        <Box sx={styles.baseTitulo} />
      </Box>
      <Box sx={styles.boxCenter}>
        <Box sx={styles.boxCardsButton}>
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
                backgroundImage: `url(${imagemPastor})`,
                backgroundSize: isMobile ? "190%" : "164%",
                backgroundPosition: isMobile ? "center 0%" : "center 50%",
                border: selectLider ? "4px solid #F3A913" : "4px solid #ffffff",
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
                    <br /> criará uma equipe e será responsável por administrar
                    as escalas e membros que fazem parte dela
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
                      setOpenModalAutorizacao(true);
                    }}
                  >
                    Escolher
                  </Button>
                </motion.div>
              </Box>
            )}
          </motion.div>
        </Box>
        <Box sx={styles.boxCardsButton}>
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
                backgroundSize: isMobile ? "210%" : "170%",
                backgroundPosition: isMobile ? "center 63%" : "center 70%",
                border: selectServo ? "4px solid #F3A913" : "4px solid #ffffff",
              }}
              onClick={handleSelectServo}
            >
              <Box sx={styles.boxTituloCards}>
                <Typography sx={styles.tituloCards}>Membro</Typography>
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
                    perfil de membro:
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
                  <Button
                    sx={styles.botaoSelecionar}
                    onClick={() => {
                      setOpenModalSelectServo(true);
                    }}
                  >
                    Escolher
                  </Button>
                </motion.div>
              </Box>
            )}
          </motion.div>
        </Box>
        <Box sx={styles.boxButtonTelaInicial}>
          <Button
            sx={{ ...styles.botaoDefault, width: "auto" }}
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            Voltar para a tela inicial
          </Button>
        </Box>
        <Box sx={{ width: "100dvw", height: "12px" }} />
      </Box>

      <Modal
        open={openModalAutorizacao}
        onClose={() => {
          handleCloseModal();
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalAutorizacao}>
          <Box sx={styles.boxModalAvisos}>
            <IconButton
              onClick={() => {
                handleCloseModal();
              }}
              sx={{ position: "absolute", top: 4, right: 0 }}
            >
              <Close sx={{ fontSize: "26px", color: "#ffffff" }} />
            </IconButton>
            <Box sx={styles.boxConteudoModalAvisos}>
              <Box sx={styles.boxAreaTituloModalAvisos}>
                <Box sx={styles.boxTituloModalAvisos}>
                  <Typography sx={styles.tituloModalAvisos}>
                    Autorização
                  </Typography>
                  <Box sx={styles.baseTituloModalAvisos} />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "220px",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  mt: "5px",
                }}
              >
                <Typography
                  sx={{
                    ...styles.textoDefault,
                    textAlign: "center",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  Digite a senha de autorização para criação de um Perfil Líder
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "220px",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "10px",
                }}
              >
                <TextField
                  value={valuePassword}
                  onKeyDown={handleKeyDown}
                  onChange={(event) => {
                    setValuePassword(event.target.value);
                  }}
                  sx={{
                    ...styles.textField,
                    "&.MuiFormControl-root.MuiTextField-root .MuiInputLabel-root.MuiInputLabel-shrink":
                      {
                        color: "#F3A913",
                      },
                    "&.MuiFormControl-root-MuiTextField-root.MuiInputBase-root-MuiFilledInput-root:hover":
                      {
                        backgroundColor: "#1B1B1B",
                      },
                    "& .MuiInputBase-root.MuiFilledInput-root:after": {
                      borderBottom: "none",
                    },
                    "& .MuiInputBase-root.MuiFilledInput-root:hover": {
                      backgroundColor: "#1B1B1B",
                    },
                    "& .MuiInputBase-root.MuiFilledInput-root": {
                      backgroundColor: "#1B1B1B",
                    },
                  }}
                  type="password"
                  variant="filled"
                  placeholder="Digite a senha..."
                  InputProps={{
                    endAdornment: (
                      <LockOutlinedIcon sx={{ mr: "-16px", mt: "16px" }} />
                    ),
                    sx: {
                      borderBottom: "2px solid #F3A913",
                      background: "#1B1B1B",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "220px",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                  mt: "15px",
                }}
              >
                <Button
                  sx={{ ...styles.botaoDefault, width: "100%" }}
                  onClick={() => {
                    handleApiPasswordAutorization();
                  }}
                >
                  Enviar
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={openModalSelectServo}
        onClose={() => {
          handleCloseModal();
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalSelectServo}>
          <Box sx={{ ...styles.boxModalAvisos, height: "250px" }}>
            <IconButton
              onClick={() => {
                handleCloseModal();
              }}
              sx={{ position: "absolute", top: 4, right: 0 }}
            >
              <Close sx={{ fontSize: "26px", color: "#ffffff" }} />
            </IconButton>
            <Box sx={styles.boxConteudoModalAvisos}>
              <Box sx={styles.boxAreaTituloModalAvisos}>
                <Box sx={styles.boxTituloModalAvisos}>
                  <Typography sx={styles.tituloModalAvisos}>
                    Confirmar Perfil
                  </Typography>
                  <Box sx={styles.baseTituloModalAvisos} />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "220px",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  mt: "5px",
                }}
              >
                <Typography
                  sx={{
                    ...styles.textoDefault,
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  Ao confirmar a sua escolha de perfil você será redirecionado
                  para solicitar a entrada em uma equipe
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "220px",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                  mt: "15px",
                }}
              >
                <Button
                  sx={{ ...styles.botaoDefault, width: "100%" }}
                  onClick={() => {
                    handleApiSelectServo();
                  }}
                >
                  Confirmar
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
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
  );
};
export default PrimerioAcesso;
