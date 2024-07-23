import {
  AddCircleOutline,
  Close,
  Person,
  PersonRemoveAlt1Outlined,
  SellOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  Fade,
  FormControlLabel,
  IconButton,
  Modal,
  Tab,
  Tabs,
  tabsClasses,
  Typography,
} from "@mui/material";
import { useState } from "react";

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
    height: "30px",
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
  configCheckbox: {
    color: "#F3A913",
    "& .MuiSvgIcon-root": {
      fontSize: "22px",
    },
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
};

const ModalPerfilMembro = (params) => {
  const { usuarioPerfil, openModalPerfilMembro, setOpenModalPerfilMembro } =
    params;

  const [valueTabInformacoes, setValueTabInformacoes] = useState("tags");
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
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

  const handleChangeTabsInformacoes = (event, newValue) => {
    setValueTabInformacoes(newValue);
  };

  const tagsFake = [
    { nome: "Cortes de Câmera" },
    { nome: "Câmera Lateral - Esquerda" },
    { nome: "Câmera Lateral - Direita" },
    { nome: "Câmera Central" },
  ];

  return (
    <Modal
      open={openModalPerfilMembro}
      onClose={() => {
        setOpenModalPerfilMembro(false);
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
                setOpenModalPerfilMembro(false);
              }}
              sx={{ position: "absolute", top: 4, right: 0 }}
            >
              <Close sx={{ fontSize: "26px", color: "#ffffff" }} />
            </IconButton>
            <Box sx={styles.areaConteudoCard}>
              <Box sx={styles.boxAreaInformacoesPerfil}>
                <Avatar sx={styles.avatarIcon}>
                  <Person sx={{ fontSize: "24px" }} />
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
                    <Tab label="Tags" value="tags" sx={{ color: "#ffffff" }} />
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
                          <IconButton sx={styles.configIconButton}>
                            <AddCircleOutline
                              sx={{ color: "#F3A913", fontSize: "18px" }}
                            />
                          </IconButton>
                          <Divider sx={styles.dividerList} />
                        </Box>
                        <Box sx={styles.boxAreaTagsPerfil}>
                          {tagsFake.map(({ nome }, index) => (
                            <Chip
                              key={index}
                              label={nome}
                              variant="outlined"
                              sx={{ ...styles.chipDefault, mb: "" }}
                            />
                          ))}
                        </Box>
                      </>
                    )}
                    {valueTabInformacoes === "dados" && (
                      <>
                        <Box sx={styles.boxAreaDoubleCheckbox}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked}
                                onChange={handleChange}
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
                                checked={checked}
                                onChange={handleChange}
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
                              João Vinícius Soarez
                            </Typography>
                          </Box>
                          <Box sx={styles.boxDadosInfo}>
                            <Typography sx={styles.textDadosLabel}>
                              Email
                            </Typography>
                            <Typography sx={styles.textDadosInfo}>
                              joãoexemplo@adpaz-zs.com.br
                            </Typography>
                          </Box>
                          <Box sx={styles.boxDadosInfo}>
                            <Typography sx={styles.textDadosLabel}>
                              Data de nascimento
                            </Typography>
                            <Typography sx={styles.textDadosInfo}>
                              12/12/2000
                            </Typography>
                            <Box sx={styles.boxAreaBotao}>
                              <Button
                                variant="contained"
                                sx={{
                                  ...styles.botaoDefaultCancelar,
                                  height: "25px",
                                  gap: "6px",
                                }}
                                onClick={() => {}}
                              >
                                <PersonRemoveAlt1Outlined
                                  sx={{ fontSize: "18px" }}
                                />
                                Expulsar membro
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </>
                    )}
                    {/* {valueTabInformacoes === "dados" && (
                      <Box sx={{ ...styles.configBox, height: "100%" }}>
                        <Typography sx={styles.textTitulo}>
                          Nenhum dado
                        </Typography>
                      </Box>
                    )} */}
                    {/* {valueTabInformacoes === "tags" && (
                    <Box sx={{ ...styles.configBox, height: "100%" }}>
                      <Typography sx={styles.textTitulo}>Sem TAGS</Typography>
                    </Box>
                  )} */}
                    <Divider sx={styles.divider} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
export default ModalPerfilMembro;
