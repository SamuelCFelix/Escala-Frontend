import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Fade,
  IconButton,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import api from "../../../../../api";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Close } from "@mui/icons-material";

const styles = {
  configBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxModalAvisos: {
    backgroundColor: "#1B1B1B",
    border: "1px solid #D32F2F",
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
    maxWidth: "90dvw",
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
    background: "#D32F2F",
    width: "100%",
    height: "3.5%",
  },
  textoDefault: {
    fontSize: "14px",
    color: "#ffffff",
    lineHeight: "24px",
    letterSpacing: "0.17px",
    textAlign: "center",
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
        borderColor: "#D32F2F",
      },
      "&:hover fieldset": {
        borderColor: "#D32F2F",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#D32F2F",
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
    background: "#D32F2F",
    "&:hover": {
      background: "#FEBC36",
    },
  },
  boxAreaTextoModal: {
    display: "flex",
    width: "220px",
    maxWidth: "90dvw",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    mt: "5px",
  },
  boxAreaTextField: {
    display: "flex",
    width: "220px",
    maxWidth: "90dvw",
    alignItems: "center",
    justifyContent: "center",
    mt: "10px",
  },
  boxAreaBotao: {
    display: "flex",
    width: "220px",
    maxWidth: "90dvw",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    mt: "15px",
  },
  boxAreaCircularProgress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
};

const ModalConfirmarExcluirEquipe = (params) => {
  const {
    openModalConfirmarExcluirEquipe,
    setOpenModalConfirmarExcluirEquipe,
    usuarioLogado,
  } = params;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [loadingApiDeletarEquipe, setLoadingApiDeletarEquipe] = useState(false);
  const [valuePassword, setValuePassword] = useState("");

  //API's

  const handleApiDeletarEquipe = async () => {
    try {
      setLoadingApiDeletarEquipe(true);

      const response = await api.post("/deleteEquipe", {
        equipeId: usuarioLogado?.equipeId,
        usuarioHostId: usuarioLogado?.usuarioId,
        senha: valuePassword,
      });

      if (response?.status === 200) {
        setOpenModalConfirmarExcluirEquipe(false);
        localStorage.clear();
        window.location.href = "/login";
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      if (error?.response?.status === 401) {
        setSnackbar("error", "Senha incorreta");
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao deletar equipe: ", error);
      }
    } finally {
      setLoadingApiDeletarEquipe(false);
    }
  };

  const handleCloseModal = () => {
    setOpenModalConfirmarExcluirEquipe(false);
    setValuePassword("");
  };

  //APERTAR ENTER
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleApiDeletarEquipe();
    }
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

  const boxTituloCards = (titulo) => {
    return (
      <Box sx={styles.areaBoxTitulo}>
        <Box sx={styles.boxTitulo}>
          <Typography sx={styles.textTitulo}>{titulo}</Typography>
          <Box sx={styles.baseTitulo} />
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Modal
        open={openModalConfirmarExcluirEquipe}
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
        <Fade in={openModalConfirmarExcluirEquipe}>
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
                    Excluir Equipe
                  </Typography>
                  <Box sx={styles.baseTituloModalAvisos} />
                </Box>
              </Box>
              <Box sx={styles.boxAreaTextoModal}>
                <Typography sx={styles.textoDefault}>
                  Digite a sua senha para confirmar a exclusão da equipe
                </Typography>
              </Box>
              <Box sx={styles.boxAreaTextField}>
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
                        color: "#D32F2F",
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
                      borderBottom: "2px solid #D32F2F",
                      background: "#1B1B1B",
                    },
                  }}
                />
              </Box>
              <Box sx={styles.boxAreaBotao}>
                <Button
                  disabled={loadingApiDeletarEquipe}
                  sx={{
                    ...styles.botaoDefault,
                    width: "100%",
                    background: "#D32F2F",
                    "&:hover": {
                      background: "#E63737",
                    },
                  }}
                  onClick={() => {
                    handleApiDeletarEquipe();
                  }}
                >
                  {loadingApiDeletarEquipe ? (
                    <Box sx={styles.boxAreaCircularProgress}>
                      <CircularProgress size={20} sx={{ color: "#BDBDBD" }} />
                    </Box>
                  ) : (
                    "Enviar"
                  )}
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
    </>
  );
};
export default ModalConfirmarExcluirEquipe;
