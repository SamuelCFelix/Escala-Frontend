import {
  AddCircleOutline,
  Close,
  Person,
  PersonRemoveAlt1Outlined,
  SellOutlined,
} from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Backdrop,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  Fade,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Modal,
  Snackbar,
  Tab,
  Tabs,
  tabsClasses,
  Typography,
} from "@mui/material";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { useState } from "react";
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
    height: "450px",
    boxShadow: 24,
  },
  boxModalConfirmacao: {
    background: "#1B1B1B",
    border: "1px solid #F3A913",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "auto",
    boxShadow: 24,
  },
  boxModalConfirmacaoPerigo: {
    background: "#1B1B1B",
    border: "1px solid #D32F2F",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
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
  areaConteudoCard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "calc(100% - 64px)",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxAreaInformacoesPerfil: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatarIcon: {
    background: "#F3A913",
    width: "50px",
    height: "50px",
  },
  textPerfilNome: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
    margin: "8px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
  },
  chipName: {
    border: "1px solid #F3A913",
    borderRadius: "10px",
    color: "#ffffff",
    height: "14px",
    fontSize: "10px",
  },
  boxTabs: {
    width: "auto",
    height: "42px",
  },
  estiloTabs: {
    [`& .${tabsClasses?.scrollButtons}`]: {
      color: "#F3A913",
      "&.Mui-disabled": { opacity: 1 },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#F3A913",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#F3A913",
    },
  },
  boxAreaConteudoTabsInformacoes: {
    width: "100%",
    height: "calc(100% - 146px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "6px",
    mt: "12px",
    overflowY: "auto",
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
  botaoDefaultCancelar: {
    display: "flex",
    width: "auto",
    height: "25px",
    padding: "0px 10px",
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
  boxAreaConteudoTabsPerfil: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "75%",
    height: "calc(100% - 20px)",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxDivisaoLista: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "20px",
    gap: "10px",
    paddingTop: "6px",
  },
  textTituloLista: {
    color: "#ffffff",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.17px",
    alignSelf: "flex-start",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
  },
  dividerList: {
    borderColor: "#565656",
    width: "100%",
    height: "1px",
    justifySelf: "flex-start",
    position: "absolute",
    bottom: 0,
  },
  boxAreaTagsPerfil: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "calc(100% - 36px)",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "4px",
    padding: "8px 0px",
    overflowY: "auto",
  },
  chipDefault: {
    backgroundColor: "#1B1B1B",
    border: "2px solid #F3A913",
    borderRadius: "10px",
    color: "#ffffff",
    height: "32px",
    minHeight: "32px",
  },
  divider: {
    position: "absolute",
    bottom: 0,
    borderColor: "#565656",
    width: "108%",
    height: "1px",
  },
  configIconButton: {
    position: "absolute",
    right: "-6.5px",
    top: "50%",
    transform: "translateY(-50%)",
    "&.MuiButtonBase-root.MuiIconButton-root:hover ": {
      backgroundColor: "rgba(243, 169, 19, 0.2)",
    },
    width: "30px",
    height: "30px",
  },
  boxAreaDoubleCheckbox: {
    display: "flex",
    width: "108%",
    height: "25px",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    ml: "24px",
  },
  textCheckboxLabel: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
  },
  boxAreaDadosInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    gap: "10px",
    mt: "12px",
  },
  boxDadosInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  textDadosLabel: {
    color: "#F3A913",
    textAlign: "center",
    fontSize: "10px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
  },
  textDadosInfo: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
  },
  boxAreaBotao: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    mt: "12px",
  },
  boxModalDelete: {
    backgroundColor: "#1B1B1B",
    border: "1px solid #D32F2F",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
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
  configCheckbox: {
    color: "#F3A913",
    "& .MuiSvgIcon-root": {
      fontSize: "22px",
    },
    "&.MuiButtonBase-root.MuiCheckbox-root.Mui-disabled": {
      color: "rgba(243, 169, 19, 0.5)",
    },
  },
  configCheckboxMenu: {
    color: "#565656",
    "&.Mui-checked": {
      color: "#F3A913",
    },
    "&.MuiButtonBase-root.MuiCheckbox-root:hover": {
      backgroundColor: "rgba(243, 169, 19, 0.1)",
    },
  },
  configBoxTextMenu: {
    maxWidth: "240px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

const ModalPerfilMembro = (params) => {
  const {
    usuarioLogado,
    usuarioPerfil,
    openModalPerfilMembro,
    setOpenModalPerfilMembro,
    tagsEquipe,
    handleBuscarMembrosMinhaEquipe,
    handleBuscarEscalaMensal,
    setValueTabInformacoesEscala,
  } = params;

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [valueTabInformacoes, setValueTabInformacoes] = useState("tags");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModalExpulsarMembro, setOpenModalExpulsarMembro] = useState(false);
  const [openModalDesativarMembro, setOpenModalDesativarMembro] =
    useState(false);

  //API

  const handleUpdateTagsMembroEquipe = async (acao, tagId, host) => {
    try {
      let response = null;
      let usuarioAtualizado = usuarioPerfil;
      if (host) {
        if (acao) {
          response = await api.put("/updateTagsMembroEquipe", {
            usuarioId: usuarioPerfil?.usuarioHostId,
            tagId,
            acao: "adicionar",
            host,
          });
        } else {
          response = await api.put("/updateTagsMembroEquipe", {
            usuarioId: usuarioPerfil?.usuarioHostId,
            tagId,
            acao: "remover",
            host,
          });
        }
      } else {
        if (acao) {
          response = await api.put("/updateTagsMembroEquipe", {
            usuarioId: usuarioPerfil?.usuarioDefaultId,
            tagId,
            acao: "adicionar",
          });
        } else {
          response = await api.put("/updateTagsMembroEquipe", {
            usuarioId: usuarioPerfil?.usuarioDefaultId,
            tagId,
            acao: "remover",
          });
        }
      }

      if (response?.status === 200) {
        handleBuscarMembrosMinhaEquipe();
        usuarioAtualizado.tags = response?.data;
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error(
        "erro ao atualizar autorização do membro da equipe: ",
        error
      );
    }
  };

  const handleStatusAtivoMembroEquipe = async (acao, host) => {
    try {
      let response = null;
      let usuarioAtualizado = usuarioPerfil;

      if (host) {
        if (acao) {
          response = await api.put("/updateStatusMembroEquipe", {
            usuarioId: usuarioPerfil?.usuarioHostId,
            acao: "ativar",
            host: true,
          });
        } else {
          response = await api.put("/updateStatusMembroEquipe", {
            usuarioId: usuarioPerfil?.usuarioHostId,
            acao: "desativar",
            host: true,
          });
          setOpenModalDesativarMembro(false);
        }
      } else {
        if (acao) {
          response = await api.put("/updateStatusMembroEquipe", {
            usuarioId: usuarioPerfil?.usuarioDefaultId,
            acao: "ativar",
          });
        } else {
          response = await api.put("/updateStatusMembroEquipe", {
            usuarioId: usuarioPerfil?.usuarioDefaultId,
            acao: "desativar",
          });
          setOpenModalDesativarMembro(false);
        }
      }

      if (response?.status === 200) {
        handleBuscarMembrosMinhaEquipe();
        usuarioAtualizado.ativo = response?.data?.ativo;
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao atualizar status do membro da equipe: ", error);
    }
  };

  const handleStatusAdministradorMembroEquipe = async (acao) => {
    try {
      let response = null;
      let usuarioAtualizado = usuarioPerfil;

      if (acao) {
        response = await api.put("/updateAdmMembroEquipe", {
          usuarioId: usuarioPerfil?.usuarioDefaultId,
          acao: "adicionar",
        });
      } else {
        response = await api.put("/updateAdmMembroEquipe", {
          usuarioId: usuarioPerfil?.usuarioDefaultId,
          acao: "remover",
        });
      }

      if (response?.status === 200) {
        handleBuscarMembrosMinhaEquipe();
        usuarioAtualizado.autorizacao = response?.data?.autorizacao;
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error(
        "erro ao atualizar autorização do membro da equipe: ",
        error
      );
    }
  };

  const handleExpulsarMembroEquipe = async () => {
    try {
      const response = await api.put("/expulsarMembroEquipe", {
        equipeId: usuarioLogado?.equipeId,
        usuarioId: usuarioPerfil?.usuarioDefaultId,
      });

      if (response?.status === 200) {
        setValueTabInformacoesEscala(1);
        handleBuscarMembrosMinhaEquipe();
        handleBuscarEscalaMensal();
        handleCloseModal();
      } else {
        setSnackbar("error", "Erro ao conectar com o servidor");
        console.error("erro ao executar ação", response?.status);
      }
    } catch (error) {
      setSnackbar("error", "Erro ao conectar com o servidor");
      console.error("erro ao expulsar membro da equipe: ", error);
    }
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

  function handleCloseModal() {
    setOpenModalExpulsarMembro(false);
    setOpenModalPerfilMembro(false);
    setValueTabInformacoes("tags");
  }

  const handleChangeCheckTags = (event, tagId, host) => {
    handleUpdateTagsMembroEquipe(event.target.checked, tagId, host);
  };

  const handleChangeCheckAtivo = (event, host) => {
    if (event.target.checked) {
      handleStatusAtivoMembroEquipe(event.target.checked, host);
    } else {
      setOpenModalDesativarMembro(true);
    }
  };

  const handleChangeCheckAdministrador = (event) => {
    handleStatusAdministradorMembroEquipe(event.target.checked);
  };

  const handleChangeTabsInformacoes = (event, newValue) => {
    setValueTabInformacoes(newValue);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
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

  return (
    <>
      <Modal
        open={openModalPerfilMembro}
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
        <Fade in={openModalPerfilMembro}>
          <Box sx={styles.boxModal}>
            <Box sx={styles.boxConteudoModal}>
              {boxTituloCards("Perfil")}
              <IconButton
                onClick={() => {
                  handleCloseModal();
                }}
                sx={{ position: "absolute", top: 4, right: 0 }}
              >
                <Close sx={{ fontSize: "26px", color: "#ffffff" }} />
              </IconButton>
              <Box sx={styles.areaConteudoCard}>
                <Box sx={styles.boxAreaInformacoesPerfil}>
                  <Avatar
                    src={usuarioPerfil?.foto || undefined}
                    sx={styles.avatarIcon}
                  >
                    {usuarioPerfil?.foto ? null : (
                      <>
                        {!usuarioPerfil?.foto &&
                          usuarioPerfil?.nome?.charAt(0)?.toUpperCase()}
                      </>
                    )}
                  </Avatar>
                  <Typography sx={styles.textPerfilNome}>
                    {usuarioPerfil?.nome}
                    {(usuarioPerfil?.autorizacao === "adm001" ||
                      usuarioPerfil?.autorizacao === "adm002") && (
                      <Chip
                        label="Admin"
                        variant="outlined"
                        sx={styles.chipName}
                      />
                    )}
                    {!usuarioPerfil?.ativo && (
                      <Chip
                        label="Inativo"
                        variant="outlined"
                        sx={{
                          ...styles.chipName,
                          borderColor: "#D32F2F",
                        }}
                      />
                    )}
                    {usuarioPerfil?.autorizacao === "adm001" && (
                      <FlagOutlinedIcon
                        sx={{
                          color: "#F3A913",
                          fontSize: "16px",
                        }}
                      />
                    )}
                  </Typography>

                  <Box sx={styles.boxTabs}>
                    <Tabs
                      value={valueTabInformacoes}
                      onChange={handleChangeTabsInformacoes}
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                      sx={styles.estiloTabs}
                    >
                      <Tab
                        label="Tags"
                        value="tags"
                        sx={{ color: "#ffffff" }}
                      />
                      <Tab
                        label="Dados"
                        value="dados"
                        sx={{ color: "#ffffff" }}
                      />
                    </Tabs>
                  </Box>
                  <Box sx={styles.boxAreaConteudoTabsInformacoes}>
                    <Box sx={styles.boxAreaConteudoTabsPerfil}>
                      {valueTabInformacoes === "tags" && (
                        <>
                          <Box sx={styles.boxDivisaoLista}>
                            <Typography sx={styles.textTituloLista}>
                              <SellOutlined
                                sx={{ color: "#F3A913", fontSize: "16px" }}
                              />
                              TAGS DO USUÁRIO
                            </Typography>
                            {(usuarioLogado?.autorizacao === "adm001" ||
                              usuarioLogado?.autorizacao === "adm002") &&
                              !(
                                usuarioPerfil?.autorizacao === "adm001" &&
                                usuarioLogado?.autorizacao !== "adm001"
                              ) && (
                                <IconButton
                                  onClick={(event) => {
                                    handleClickMenu(event);
                                  }}
                                  sx={styles.configIconButton}
                                >
                                  <AddCircleOutline
                                    sx={{ color: "#F3A913", fontSize: "18px" }}
                                  />
                                </IconButton>
                              )}

                            <Menu
                              anchorEl={anchorEl}
                              open={anchorEl !== null}
                              onClose={() => {
                                handleCloseMenu();
                              }}
                              PaperProps={{
                                sx: {
                                  backgroundColor: "#1B1B1B",
                                  border: "1px solid #F3A913",
                                  maxHeight: "152px",
                                  maxWidth: "286px",
                                },
                              }}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuList
                                sx={{ paddingTop: "4px", paddingBottom: "4px" }}
                              >
                                {tagsEquipe?.map((tag) => (
                                  <MenuItem
                                    key={tag.id}
                                    sx={{
                                      color: "#ffffff",
                                      height: "42px",
                                    }}
                                  >
                                    <FormGroup>
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={usuarioPerfil?.tags?.some(
                                              (userTag) => userTag.id === tag.id
                                            )}
                                            onChange={(event) => {
                                              if (
                                                usuarioLogado?.autorizacao ===
                                                  "adm001" &&
                                                usuarioPerfil?.autorizacao ===
                                                  "adm001"
                                              ) {
                                                handleChangeCheckTags(
                                                  event,
                                                  tag.id,
                                                  true
                                                );
                                              } else {
                                                handleChangeCheckTags(
                                                  event,
                                                  tag.id
                                                );
                                              }
                                            }}
                                            sx={styles.configCheckboxMenu}
                                          />
                                        }
                                        label={
                                          <Typography
                                            variant="body1"
                                            sx={styles.configBoxTextMenu}
                                          >
                                            {tag.nome}
                                          </Typography>
                                        }
                                      />
                                    </FormGroup>
                                  </MenuItem>
                                ))}
                              </MenuList>
                            </Menu>
                            <Divider sx={styles.dividerList} />
                          </Box>
                          <Box sx={styles.boxAreaTagsPerfil}>
                            {usuarioPerfil?.tags?.map(({ nome }, index) => (
                              <Chip
                                key={index}
                                label={nome}
                                variant="outlined"
                                sx={styles.chipDefault}
                              />
                            ))}
                            {usuarioPerfil?.tags?.length === 0 && (
                              <Box sx={{ ...styles.configBox, height: "100%" }}>
                                <Typography sx={styles.textTitulo}>
                                  Nenhuma TAG
                                </Typography>
                              </Box>
                            )}
                          </Box>
                        </>
                      )}
                      {valueTabInformacoes === "dados" && (
                        <>
                          <Box sx={styles.boxAreaDoubleCheckbox}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disabled={
                                    !(
                                      usuarioLogado?.autorizacao === "adm001" ||
                                      usuarioLogado?.autorizacao === "adm002"
                                    ) ||
                                    (usuarioPerfil?.autorizacao === "adm001" &&
                                      usuarioLogado?.autorizacao !== "adm001")
                                  }
                                  checked={usuarioPerfil?.ativo}
                                  onChange={(event) => {
                                    if (
                                      usuarioLogado?.autorizacao === "adm001" &&
                                      usuarioPerfil?.autorizacao === "adm001"
                                    ) {
                                      handleChangeCheckAtivo(event, true);
                                    } else {
                                      handleChangeCheckAtivo(event);
                                    }
                                  }}
                                  inputProps={{ "aria-label": "controlled" }}
                                  sx={styles.configCheckbox}
                                />
                              }
                              label={
                                <Typography sx={styles.textCheckboxLabel}>
                                  Membro ativo
                                </Typography>
                              }
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disabled={
                                    !(
                                      usuarioLogado?.autorizacao === "adm001" ||
                                      usuarioLogado?.autorizacao === "adm002"
                                    ) || usuarioPerfil?.autorizacao === "adm001"
                                  }
                                  checked={
                                    usuarioPerfil?.autorizacao === "adm001" ||
                                    usuarioPerfil?.autorizacao === "adm002"
                                  }
                                  onChange={handleChangeCheckAdministrador}
                                  inputProps={{ "aria-label": "controlled" }}
                                  sx={styles.configCheckbox}
                                />
                              }
                              label={
                                <Typography sx={styles.textCheckboxLabel}>
                                  Usuário administrador
                                </Typography>
                              }
                            />
                          </Box>
                          <Box sx={styles.boxAreaDadosInfo}>
                            <Box sx={styles.boxDadosInfo}>
                              <Typography sx={styles.textDadosLabel}>
                                Nome completo
                              </Typography>
                              <Typography sx={styles.textDadosInfo}>
                                {usuarioPerfil?.nome}
                              </Typography>
                            </Box>
                            <Box sx={styles.boxDadosInfo}>
                              <Typography sx={styles.textDadosLabel}>
                                Email
                              </Typography>
                              <Typography sx={styles.textDadosInfo}>
                                {usuarioPerfil?.email}
                              </Typography>
                            </Box>
                            <Box sx={styles.boxDadosInfo}>
                              <Typography sx={styles.textDadosLabel}>
                                Data de nascimento
                              </Typography>
                              <Typography sx={styles.textDadosInfo}>
                                {usuarioPerfil?.dataNascimento}
                              </Typography>
                              {(usuarioLogado?.autorizacao === "adm001" ||
                                usuarioLogado?.autorizacao === "adm002") && (
                                <Box sx={styles.boxAreaBotao}>
                                  {usuarioPerfil?.autorizacao !== "adm001" && (
                                    <Button
                                      variant="contained"
                                      sx={{
                                        ...styles.botaoDefaultCancelar,
                                        height: "25px",
                                        gap: "6px",
                                      }}
                                      onClick={() => {
                                        setOpenModalExpulsarMembro(true);
                                      }}
                                    >
                                      <PersonRemoveAlt1Outlined
                                        sx={{ fontSize: "18px" }}
                                      />
                                      Expulsar membro
                                    </Button>
                                  )}
                                </Box>
                              )}
                            </Box>
                          </Box>
                        </>
                      )}
                      <Divider sx={styles.divider} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={openModalExpulsarMembro}
        onClose={() => {
          setOpenModalExpulsarMembro(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalExpulsarMembro}>
          <Box sx={styles.boxModalDelete}>
            <Box sx={styles.boxConteudoModalDelete}>
              <Box sx={styles.boxAreaTituloModalDelete}>
                <Box sx={styles.boxTituloModalDelete}>
                  <Typography sx={styles.tituloModalDelete}>
                    Expulsar membro
                  </Typography>
                  <Box sx={styles.baseTituloModalDelete} />
                </Box>
              </Box>
              <Box sx={styles.boxInputsModal}>
                <Typography sx={styles.textModal}>
                  Você realmente deseja{" "}
                  <span style={{ color: "red" }}>EXPULSAR</span> esse membro da
                  sua equipe?
                </Typography>
                <Typography sx={styles.textModal}>
                  Ao confirmar, ele será removido de todas as suas escalações e
                  também perderá o acesso a sua equipe!
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
                      setOpenModalExpulsarMembro(false);
                    }}
                  >
                    Cancelar
                  </Button>

                  <Button
                    sx={styles.botaoDefaultModal}
                    onClick={() => {
                      handleExpulsarMembroEquipe();
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
      <Modal
        open={openModalDesativarMembro}
        onClose={() => {
          setOpenModalDesativarMembro(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalDesativarMembro}>
          <Box sx={styles.boxModalDelete}>
            <Box sx={styles.boxConteudoModalDelete}>
              <Box sx={styles.boxAreaTituloModalDelete}>
                <Box sx={styles.boxTituloModalDelete}>
                  <Typography sx={styles.tituloModalDelete}>
                    Desativar membro
                  </Typography>
                  <Box sx={styles.baseTituloModalDelete} />
                </Box>
              </Box>
              <Box sx={styles.boxInputsModal}>
                <Typography sx={styles.textModal}>
                  Você realmente deseja desativar esse membro da sua equipe?
                </Typography>
                <Typography sx={styles.textModal}>
                  Ao confirmar, o usuário não será incluído na geração das
                  escalas e não poderá mais ser escalado nem se candidatar às
                  escalas de sua equipe
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
                      setOpenModalDesativarMembro(false);
                    }}
                  >
                    Cancelar
                  </Button>

                  <Button
                    sx={styles.botaoDefaultModal}
                    onClick={(event) => {
                      if (
                        usuarioLogado?.autorizacao === "adm001" &&
                        usuarioPerfil?.autorizacao === "adm001"
                      ) {
                        handleStatusAtivoMembroEquipe(false, true);
                      } else {
                        handleStatusAtivoMembroEquipe(false);
                      }
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
export default ModalPerfilMembro;
