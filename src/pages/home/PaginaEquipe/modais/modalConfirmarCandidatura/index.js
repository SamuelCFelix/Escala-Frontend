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
  boxModal: {
    background: "#1B1B1B",
    border: "1px solid #F3A913",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    maxWidth: "90dvw",
    height: "auto",
    boxShadow: 24,
  },
  boxConteudoModal: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0px",
  },
  dataTextModal: {
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "6px",
  },
  boxBotoesModal: {
    display: "flex",
    width: "100%",
    gap: "6px",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: "10px 0px",
    mr: "20px",
  },
  botaoDefaultModal: {
    display: "flex",
    width: "auto",
    height: "25px",
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
    "&:disabled": {
      color: "#ffffff",
      background: "rgba(243, 169, 19, 0.6)",
    },
  },
};

const ModalConfirmarCandidatura = (params) => {
  const {
    openModalConfirmarCandidatura,
    setOpenModalConfirmarCandidatura,
    infoEscalarMembro,
    usuarioLogado,
    escalaMensal,
    setEscalaMensal,
    setFotosUsuarios,
    fotosUsuarios,
    setCopyEscalaMensal,
    valueTabInformacoesEscala,
    proximaEscalaMensal,
    setProximaEscalaMensal,
    setFotosUsuariosProximaEscala,
    fotosUsuariosProximaEscala,
    setCopyProximaEscalaMensal,
  } = params;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [loadingApiEscalarMembro, setLoadingApiEscalarMembro] = useState(false);

  //API's

  const handleAtualizarEscalaData = async (usuarioId, nome, foto, tagId) => {
    try {
      setLoadingApiEscalarMembro(true);

      let escaladosUpdate = infoEscalarMembro?.escalados?.map((escalado) => {
        if (escalado.tagId === tagId) {
          return {
            ...escalado,
            membroId: usuarioId,
            membroNome: nome,
          };
        } else {
          return escalado;
        }
      });

      let response = [];

      if (valueTabInformacoesEscala == 1) {
        response = await api.post("/updateEscalaData", {
          equipeId: usuarioLogado?.equipeId,
          escalaDataId: infoEscalarMembro?.escalaDataId,
          escalados: escaladosUpdate,
        });
      } else if (valueTabInformacoesEscala == 2) {
        response = await api.post("/updateProximaEscalaData", {
          equipeId: usuarioLogado?.equipeId,
          escalaDataId: infoEscalarMembro?.escalaDataId,
          escalados: escaladosUpdate,
        });
      }

      if (response?.status === 200) {
        let salvarCopyEscalaMensal = true;

        if (valueTabInformacoesEscala == 1) {
          handleEscalarMembroModoEdit(
            usuarioId,
            nome,
            foto,
            tagId,
            salvarCopyEscalaMensal
          );
        } else if (valueTabInformacoesEscala == 2) {
          handleEscalarMembroModoEditProximaEscala(
            usuarioId,
            nome,
            foto,
            tagId,
            salvarCopyEscalaMensal
          );
        }
        setLoadingApiEscalarMembro(false);
        setSnackbar("success", "Usuário escalado com sucesso");
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao buscar usuários disponíveis para escala: ", error);
    }
  };

  function handleEscalarMembroModoEdit(
    usuarioId,
    nome,
    foto,
    tagId,
    salvarCopyEscalaMensal
  ) {
    const indexEscala = escalaMensal?.findIndex(
      (escala) => escala.escalaDataId === infoEscalarMembro?.escalaDataId
    );

    if (indexEscala !== -1) {
      const indexEscalado = escalaMensal[indexEscala]?.escalados?.findIndex(
        (escalado) => escalado.tagId === tagId
      );

      if (indexEscalado !== -1) {
        const novosEscalados = [...escalaMensal[indexEscala]?.escalados];
        novosEscalados[indexEscalado] = {
          ...novosEscalados[indexEscalado],
          membroId: usuarioId,
          membroNome: nome,
        };

        const novaEscalaMensal = [...escalaMensal];
        novaEscalaMensal[indexEscala] = {
          ...novaEscalaMensal[indexEscala],
          escalados: novosEscalados,
        };

        // Verifica se a lista de fotos já contém o membroId, e se não, adiciona-o
        if (
          !fotosUsuarios?.some(
            (fotoUsuario) => fotoUsuario.membroId === usuarioId
          )
        ) {
          setFotosUsuarios((prevState) => [
            ...prevState,
            { membroId: usuarioId, membroFoto: foto },
          ]);
        }

        setEscalaMensal(novaEscalaMensal);

        if (salvarCopyEscalaMensal) {
          setCopyEscalaMensal(novaEscalaMensal);
        }

        setOpenModalConfirmarCandidatura(false);
      }
    }
  }

  function handleEscalarMembroModoEditProximaEscala(
    usuarioId,
    nome,
    foto,
    tagId,
    salvarCopyEscalaMensal
  ) {
    const indexEscala = proximaEscalaMensal?.findIndex(
      (escala) => escala.escalaDataId === infoEscalarMembro?.escalaDataId
    );

    if (indexEscala !== -1) {
      const indexEscalado = proximaEscalaMensal[
        indexEscala
      ]?.escalados?.findIndex((escalado) => escalado.tagId === tagId);

      if (indexEscalado !== -1) {
        const novosEscalados = [...proximaEscalaMensal[indexEscala]?.escalados];
        novosEscalados[indexEscalado] = {
          ...novosEscalados[indexEscalado],
          membroId: usuarioId,
          membroNome: nome,
        };

        const novaEscalaMensal = [...proximaEscalaMensal];
        novaEscalaMensal[indexEscala] = {
          ...novaEscalaMensal[indexEscala],
          escalados: novosEscalados,
        };

        // Verifica se a lista de fotos já contém o membroId, e se não, adiciona-o
        if (
          !fotosUsuariosProximaEscala?.some(
            (fotoUsuario) => fotoUsuario.membroId === usuarioId
          )
        ) {
          setFotosUsuariosProximaEscala((prevState) => [
            ...prevState,
            { membroId: usuarioId, membroFoto: foto },
          ]);
        }

        setProximaEscalaMensal(novaEscalaMensal);

        if (salvarCopyEscalaMensal) {
          setCopyProximaEscalaMensal(novaEscalaMensal);
        }
        setOpenModalConfirmarCandidatura(false);
      }
    }
  }

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
        open={openModalConfirmarCandidatura}
        onClose={() => {
          setOpenModalConfirmarCandidatura(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalConfirmarCandidatura}>
          <Box sx={styles.boxModal}>
            <Box sx={styles.boxConteudoModal}>
              {boxTituloCards("Preencher programação")}
              <Typography sx={styles.dataTextModal}>
                Ao confirmar, você estará assumindo o compromisso de
                comparecimento e será escalado para esse dia
              </Typography>
              <Box sx={styles.boxBotoesModal}>
                <Button
                  onClick={() => {
                    setOpenModalConfirmarCandidatura(false);
                  }}
                  sx={styles.botaoDefaultModal}
                >
                  {" "}
                  Cancelar
                </Button>
                <Button
                  disabled={loadingApiEscalarMembro}
                  onClick={() => {
                    handleAtualizarEscalaData(
                      usuarioLogado?.usuarioDefaultId,
                      usuarioLogado?.nome,
                      usuarioLogado?.foto,
                      infoEscalarMembro?.tagId
                    );
                  }}
                  sx={styles.botaoDefaultModal}
                >
                  {" "}
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
    </>
  );
};
export default ModalConfirmarCandidatura;
