import {
  Close,
  KeyboardArrowRightOutlined,
  Person,
  Search,
} from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Backdrop,
  Box,
  Button,
  Chip,
  CircularProgress,
  Fade,
  IconButton,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import api from "../../../../../api";

const styles = {
  configBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxModal: {
    backgroundColor: "#000000",
    border: "1px solid #F3A913",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "446px",
    maxWidth: "90dvw",
    height: "487px",
    maxHeight: "90dvh",
    boxShadow: 24,
    overflowY: "auto",
  },
  boxConteudoModal: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
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
  dataIcon: {
    color: "#F3A913",
    fontSize: "18px",
  },
  dataIconInsid: {
    color: "#F3A913",
    fontSize: "10px",
    background: "#000000",
    border: "1px solid #000000",
    borderRadius: "50%",
    position: "absolute",
    bottom: -3,
    right: -3,
  },
  textNamePerfil: {
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "150%px",
    letterSpacing: "0.15px",
    textAlign: "center",
  },
  dataText: {
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
  textFieldSearch: {
    display: "flex",
    width: "100%",
    height: "28px",
    "& .MuiInputBase-root.MuiFilledInput-root": {
      height: "30px",
      paddingLeft: "0px",
    },
    "& input": {
      color: "#ffffff",
      p: "0px",
      ml: "6px",
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
      color: "#F3A913",
    },
    "& .MuiOutlinedInput-root .MuiSelect-select": {
      textAlign: "center",
    },
  },
  boxInfoProgramacao: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
    gap: "10px",
    mb: "6px",
  },
  boxDoubleIcon: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxOpcoesPerfil: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
    height: "calc(100% - 220px)",
    gap: "10px",
    mb: "10px",
    overflowY: "auto",
  },
  botaoCardPerfil: {
    background: "#1B1B1B",
    border: "1px solid #F3A913",
    borderRadius: "5px",
    display: "flex",
    width: "100%",
    height: "50px",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    textTransform: "none",
  },
  avatarMembro: {
    width: "40px",
    height: "40px",
    background: "#F3A913",
  },
  boxInfoPerfilCard: {
    width: "calc(100% - 72px)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    ml: "6px",
  },
  iconCardPerfil: {
    color: "#F3A913",
    fontSize: "24px",
    position: "absolute",
    right: "2px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  boxChipPerfil: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "4px",
  },
  chipPerfil: {
    background: "#2E7D32",
    color: "#ffffff",
    fontSize: "9px",
    height: "12px",
    display: "flex",
    "& .MuiChip-label": {
      paddingTop: "2px",
    },
  },
  botaoDefault: {
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
  boxAreaCircularProgress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
};

const ModalEscalarMembro = (params) => {
  const {
    openModalEscalarMembro,
    setOpenModalEscalarMembro,
    infoEscalarMembro,
    usuarioLogado,
    handleBuscarProximaEscala,
    editarEscala,
    setProximaEscala,
    handleBuscarEscalacoesUsuario,
    setFotosUsuarios,
    fotosUsuarios,
    setCopyProximaEscala,
  } = params;
  const [OpenModalConfirmarEscolha, setOpenModalConfirmarEscolha] =
    useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [usuariosDisponiveis, setUsuariosDisponiveis] = useState([]);
  const [
    loadingTabelaUsuariosDisponiveis,
    setLoadingTabelaUsuariosDisponiveis,
  ] = useState(true);
  const [loadingApiEscalarMembro, setLoadingApiEscalarMembro] = useState(false);
  const [positionUsuarioSelecionado, setPositionUsuarioSelecionado] =
    useState(0);

  //UseEffect's
  useEffect(() => {
    if (openModalEscalarMembro) {
      handleBuscarUsuariosDisponiveis();
    }
  }, [openModalEscalarMembro]);

  //API's

  const handleBuscarUsuariosDisponiveis = async () => {
    try {
      setLoadingTabelaUsuariosDisponiveis(true);

      // Definir os parâmetros a serem enviados na requisição
      let params = {
        equipeId: usuarioLogado?.equipeId,
        escalaDataId: infoEscalarMembro?.escalaDataId,
        tagId: infoEscalarMembro?.tagId,
        tipo: 1,
      };

      // Se estiver no modo de edição, adicionar parâmetros adicionais
      if (editarEscala) {
        params = {
          ...params,
          modoEdit: true,
          escaladosModoEdit: infoEscalarMembro?.escalados,
          tipo: 1,
        };
      }

      // Fazer a requisição com os parâmetros definidos
      const response = await api.post(
        "/buscarUsuariosDisponiveisEscalaData",
        params
      );

      if (response?.status === 200) {
        setUsuariosDisponiveis(response?.data);
        setLoadingTabelaUsuariosDisponiveis(false);
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao buscar usuários disponíveis para escala: ", error);
    }
  };

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

      const response = await api.post("/updateEscalaData", {
        equipeId: usuarioLogado?.equipeId,
        escalaDataId: infoEscalarMembro?.escalaDataId,
        escalados: escaladosUpdate,
      });

      if (response?.status === 200) {
        /* handleBuscarProximaEscala();
        setOpenModalConfirmarEscolha(false);
        setOpenModalEscalarMembro(false); */
        handleEscalarMembroModoEdit(usuarioId, nome, foto, tagId);
        if (
          escaladosUpdate?.some(
            (escalados) =>
              escalados.membroId === usuarioLogado?.usuarioHostId ||
              escalados.membroId === usuarioLogado?.usuarioDefaultId
          )
        ) {
          handleBuscarEscalacoesUsuario();
        }

        // Atualiza a copy da próxima escala com a lista de escalados atualizada
        setCopyProximaEscala((prevState) => ({
          ...prevState,
          escalados: escaladosUpdate,
        }));

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

  function handleEscalarMembroModoEdit(usuarioId, nome, foto, tagId) {
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

    // Verifica se a lista de fotos já contém o membroId, e se não, adiciona-o
    if (
      !fotosUsuarios?.some((fotoUsuario) => fotoUsuario.membroId === usuarioId)
    ) {
      setFotosUsuarios((prevState) => [
        ...prevState,
        { membroId: usuarioId, membroFoto: foto },
      ]);
    }

    // Atualiza a próxima escala com a lista de escalados atualizada
    setProximaEscala((prevState) => ({
      ...prevState,
      escalados: escaladosUpdate,
    }));
    setOpenModalConfirmarEscolha(false);
    setOpenModalEscalarMembro(false);
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
        open={openModalEscalarMembro}
        onClose={() => {
          setOpenModalEscalarMembro(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalEscalarMembro}>
          <Box sx={styles.boxModal}>
            <Box sx={styles.boxConteudoModal}>
              {boxTituloCards("Escalar Membro")}
              <IconButton
                onClick={() => {
                  setOpenModalEscalarMembro(false);
                }}
                sx={{ position: "absolute", top: 4, right: 0 }}
              >
                <Close sx={{ fontSize: "26px", color: "#ffffff" }} />
              </IconButton>
              <Box sx={styles.boxInfoProgramacao}>
                <Typography sx={styles.dataText}>
                  <ChurchOutlinedIcon sx={styles.dataIcon} />
                  {infoEscalarMembro?.culto}
                </Typography>
                <Typography sx={styles.dataText}>
                  <Box sx={styles.boxDoubleIcon}>
                    <CalendarMonthOutlinedIcon sx={styles.dataIcon} />
                    <AccessTimeOutlinedIcon sx={styles.dataIconInsid} />
                  </Box>
                  {`${infoEscalarMembro?.data} - ${infoEscalarMembro?.dia} - ${infoEscalarMembro?.horario}`}
                </Typography>
                <Typography sx={styles.dataText}>
                  <SellOutlinedIcon sx={styles.dataIcon} />
                  {infoEscalarMembro?.tagNome}
                </Typography>
                <TextField
                  focused
                  variant="filled"
                  placeholder="Procurar membro"
                  sx={styles.textFieldSearch}
                  InputProps={{
                    startAdornment: <Search sx={styles.dataIcon} />,
                  }}
                />
              </Box>
              <Box sx={styles.boxOpcoesPerfil}>
                <>
                  {loadingTabelaUsuariosDisponiveis && (
                    <Box sx={styles.boxAreaCircularProgress}>
                      <CircularProgress />
                    </Box>
                  )}

                  {!loadingTabelaUsuariosDisponiveis && (
                    <>
                      {usuariosDisponiveis?.map(
                        (
                          {
                            usuarioId,
                            nome,
                            foto,
                            possuiTag,
                            possuiDisponibilidade,
                          },
                          index
                        ) => (
                          <Button
                            disabled={loadingApiEscalarMembro}
                            onClick={() => {
                              if (!possuiDisponibilidade || !possuiTag) {
                                setPositionUsuarioSelecionado(index);
                                setOpenModalConfirmarEscolha(true);
                              } else {
                                if (editarEscala) {
                                  handleEscalarMembroModoEdit(
                                    usuarioId,
                                    nome,
                                    foto,
                                    infoEscalarMembro?.tagId
                                  );
                                } else {
                                  handleAtualizarEscalaData(
                                    usuarioId,
                                    nome,
                                    foto,
                                    infoEscalarMembro?.tagId
                                  );
                                }
                              }
                            }}
                            sx={styles.botaoCardPerfil}
                          >
                            <Avatar
                              src={foto || undefined}
                              sx={styles.avatarMembro}
                            >
                              {foto ? null : (
                                <>{nome?.charAt(0)?.toUpperCase()}</>
                              )}
                            </Avatar>
                            <Box sx={styles.boxInfoPerfilCard}>
                              <Typography sx={styles.textNamePerfil}>
                                {nome}
                              </Typography>
                              <Box sx={styles.boxChipPerfil}>
                                {possuiDisponibilidade ? (
                                  <Chip
                                    label="Disponível"
                                    sx={styles.chipPerfil}
                                  />
                                ) : (
                                  <Chip
                                    label="Indisponível"
                                    sx={{
                                      ...styles.chipPerfil,
                                      background: "#D32F2F",
                                    }}
                                  />
                                )}
                                {possuiTag ? (
                                  <Chip
                                    label={infoEscalarMembro?.tagNome}
                                    sx={styles.chipPerfil}
                                  />
                                ) : (
                                  <Chip
                                    label={infoEscalarMembro?.tagNome}
                                    sx={{
                                      ...styles.chipPerfil,
                                      background: "#D32F2F",
                                    }}
                                  />
                                )}
                              </Box>
                            </Box>
                            <KeyboardArrowRightOutlined
                              sx={styles.iconCardPerfil}
                            />
                          </Button>
                        )
                      )}

                      {usuariosDisponiveis?.length === 0 && (
                        <Box sx={{ ...styles.configBox, height: "100%" }}>
                          <Typography sx={styles.textTitulo}>
                            Nenhum membro disponível
                          </Typography>
                        </Box>
                      )}
                    </>
                  )}
                </>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={OpenModalConfirmarEscolha}
        onClose={() => {
          setOpenModalConfirmarEscolha(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={OpenModalConfirmarEscolha}>
          <Box
            sx={{
              ...styles.boxModal,
              background: "#1B1B1B",
              width: "400px",
              maxWidth: "90dvw",
              height: "auto",
              top: "50%",
            }}
          >
            <Box sx={{ ...styles.boxConteudoModal, gap: "0px" }}>
              {boxTituloCards("Confirmar Escolha")}
              <Typography sx={styles.dataText}>
                Confirme a sua escolha de membro para essa função
              </Typography>
              <Typography sx={{ ...styles.dataText, color: "#D32F2F" }}>
                Obs.: Membro sem Disponibilidade ou Tag necessária
              </Typography>
              <Box sx={styles.boxBotoesModal}>
                <Button
                  onClick={() => {
                    setOpenModalConfirmarEscolha(false);
                  }}
                  sx={styles.botaoDefault}
                >
                  {" "}
                  Cancelar
                </Button>
                <Button
                  onClick={() => {
                    if (editarEscala) {
                      handleEscalarMembroModoEdit(
                        usuariosDisponiveis[positionUsuarioSelecionado]
                          ?.usuarioId,
                        usuariosDisponiveis[positionUsuarioSelecionado]?.nome,
                        usuariosDisponiveis[positionUsuarioSelecionado]?.foto,
                        infoEscalarMembro?.tagId
                      );
                    } else {
                      handleAtualizarEscalaData(
                        usuariosDisponiveis[positionUsuarioSelecionado]
                          ?.usuarioId,
                        usuariosDisponiveis[positionUsuarioSelecionado]?.nome,
                        usuariosDisponiveis[positionUsuarioSelecionado]?.foto,
                        infoEscalarMembro?.tagId
                      );
                    }
                  }}
                  sx={styles.botaoDefault}
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
export default ModalEscalarMembro;
