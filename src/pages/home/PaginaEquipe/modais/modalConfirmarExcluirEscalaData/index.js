import {
  Alert,
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Snackbar,
  Typography,
} from "@mui/material";
import api from "../../../../../api";
import { useState } from "react";

const styles = {
  configBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  areaBoxTitulo: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "44px",
    alignItems: "center",
    justifyContent: "center",
    mb: "10px",
  },
  boxTitulo: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: "44px",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px",
  },
  textTitulo: {
    color: "#ffffff",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    padding: "0px 20px",
  },
  baseTitulo: {
    background: "#F3A913",
    width: "100%",
    height: "3.5%",
  },
  botaoDefault: {
    display: "flex",
    width: "auto",
    height: "30px",
    padding: "0px 20px",
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
  divider: {
    position: "absolute",
    bottom: 0,
    borderColor: "#565656",
    width: "108%",
    height: "1px",
  },
  boxModalDelete: {
    backgroundColor: "#1B1B1B",
    border: "1px solid #D32F2F",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "420px",
    maxWidth: "90dvw",
    height: "auto",
    paddingBottom: "4px",
    boxShadow: 24,
  },
  boxConteudoModalDelete: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  boxAreaTituloModalDelete: {
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxTituloModalDelete: {
    width: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tituloModalDelete: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    margin: "6% 0%",
  },
  baseTituloModalDelete: {
    background: "#D32F2F",
    width: "130%",
    height: "2.5%",
  },
  boxBotaoModalDelete: {
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "end",
    justifyContent: "end",
    mb: "8px",
  },
  boxBotoesModalDelete: {
    width: "210px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mr: "10px",
  },
  botaoDefaultModal: {
    width: "100px",
    height: "25px",
    padding: "0px 40px",
    borderRadius: "5px",
    fontFamily: "Roboto, sans-serif",
    fontSize: "12px",
    lineHeight: "36px",
    letterSpacing: "1.25px",
    color: "#ffffff",
    background: "#D32F2F",
    "&:hover": {
      background: "#E63737",
    },
  },
  textModal: {
    color: "#ffffff",
    fontSize: "15px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
    textAlign: "center",
  },
};

const ModalConfirmarExcluirEscalaData = (params) => {
  const {
    openModalConfirmarExcluirEscalaData,
    setOpenModalConfirmarExcluirEscalaData,
    infoDeletarEscalaData,
    usuarioLogado,
    escalaMensal,
    setEscalaMensal,
    valueTabInformacoesEscala,
    proximaEscalaMensal,
    setProximaEscalaMensal,
  } = params;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [loadingApiEscalarMembro, setLoadingApiEscalarMembro] = useState(false);

  //API's

  const handleExcluirEscalaData = async () => {
    try {
      setLoadingApiEscalarMembro(true);

      let escalaUpdate = [];
      let response = [];

      if (valueTabInformacoesEscala == 1) {
        response = await api.post("/deleteEscalaData", {
          equipeId: usuarioLogado?.equipeId,
          escalaDataId: infoDeletarEscalaData?.escalaDataId,
        });
      } else if (valueTabInformacoesEscala == 2) {
        response = await api.post("/deleteProximaEscalaData", {
          equipeId: usuarioLogado?.equipeId,
          escalaDataId: infoDeletarEscalaData?.escalaDataId,
        });
      }

      if (response?.status === 200) {
        if (valueTabInformacoesEscala == 1) {
          escalaUpdate = escalaMensal?.filter(
            (escala) =>
              escala.escalaDataId !== infoDeletarEscalaData?.escalaDataId
          );

          setEscalaMensal(escalaUpdate);
        } else if (valueTabInformacoesEscala == 2) {
          escalaUpdate = proximaEscalaMensal?.filter(
            (escala) =>
              escala.escalaDataId !== infoDeletarEscalaData?.escalaDataId
          );
          setProximaEscalaMensal(escalaUpdate);
        }
        setOpenModalConfirmarExcluirEscalaData(false);
        setLoadingApiEscalarMembro(false);
        setSnackbar("success", "Escala deletada com sucesso");
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao deletar escala: ", error);
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
        open={openModalConfirmarExcluirEscalaData}
        onClose={() => {
          setOpenModalConfirmarExcluirEscalaData(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalConfirmarExcluirEscalaData}>
          <Box sx={styles.boxModalDelete}>
            <Box sx={styles.boxConteudoModalDelete}>
              <Box sx={styles.boxAreaTituloModalDelete}>
                <Box sx={styles.boxTituloModalDelete}>
                  <Typography sx={styles.tituloModalDelete}>
                    Deletar Escala
                  </Typography>
                  <Box sx={styles.baseTituloModalDelete} />
                </Box>
              </Box>
              <Box sx={styles.boxInputsModal}>
                <Typography sx={styles.textModal}>
                  Você realmente deseja deletar essa escala?
                </Typography>
                <Typography sx={styles.textModal}>
                  Ao confirmar, a escala desse dia será removida da escala
                  mensal e os membros não serão mais escalados para ela!
                </Typography>
              </Box>
              <Box sx={styles.boxBotaoModalDelete}>
                <Box sx={styles.boxBotoesModalDelete}>
                  <Button
                    sx={{
                      ...styles.botaoDefaultModal,
                      background: "#565656",
                      "&:hover": {
                        background: "#666666",
                      },
                    }}
                    onClick={() => {
                      setOpenModalConfirmarExcluirEscalaData(false);
                    }}
                  >
                    Cancelar
                  </Button>

                  <Button
                    disabled={loadingApiEscalarMembro}
                    sx={styles.botaoDefaultModal}
                    onClick={(event) => {
                      handleExcluirEscalaData();
                    }}
                  >
                    Confirmar
                  </Button>
                </Box>
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
export default ModalConfirmarExcluirEscalaData;
