import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Card,
  Fade,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../../../api";
import { Close } from "@mui/icons-material";

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
    justifyContent: "flex-start",
    overflow: "auto",
  },
  boxTitulo: {
    width: "384px",
    height: "72px",
    mb: "16px",
    mt: "64px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  boxTituloCard: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mb: "0px",
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
  boxCenter: {
    width: "100dvw",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
  },
  textoDefault: {
    fontSize: "14px",
    color: "#ffffff",
    lineHeight: "24px",
    letterSpacing: "0.17px",
  },
  boxAreaCardEquipe: {
    display: "flex",
    position: "relative",
    width: "90dvw",
    height: "122px",
    maxWidth: "400px",
    cursor: "pointer",
  },
  boxEquipe: {
    background: "#000000",
    width: "400px",
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
  blurBackground: {
    position: "absolute",
    width: "360px",
    height: "100%",
    backgroundColor: "#F3A913",
    borderRadius: "10px",
    right: "0",
    clipPath: "polygon(0 0, 100% 0, 100% 0, 100% 100%)",
    filter: "blur(230px)", // Aplica o efeito de desfoque
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
    width: "100%",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxRodapeEquipe: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: "6px",
  },
  boxModalAvisos: {
    backgroundColor: "#000000",
    border: "1px solid #F3A913",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "340px",
    maxHeight: "90dvh",
    boxShadow: 24,
  },
  boxConteudoModalAvisos: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "auto",
  },
  boxAreaTituloModalAvisos: {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "2px",
    mb: "2px",
  },
  boxTituloModalAvisos: {
    minWidth: "220px",
    maxWidth: "270px",
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
    height: "2.5%",
  },
  boxModalAreaInfoEquipe: {
    display: "flex",
    width: "80%",
    height: "84px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  estiloAvatar: {
    backgroundColor: "#F3A913",
    width: "50px",
    height: "50px",
    mr: "6px",
  },
  boxInfo: {
    width: "90dvw",
    maxWidth: "420px",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "10px",
    border: "1px solid #F3A913",
    gap: "12px",
    padding: "14px 0px",
  },
  botaoDefault: {
    display: "flex",
    width: "auto",
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
};

const EscolherEquipe = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const [openModalEquipe, setOpenModalEquipe] = useState({});
  const [usuarioDefaultId, setUsuarioDefaultId] = useState("");
  const [arrayEquipes, setArrayEquipes] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("login");

    const userData = JSON.parse(storedData);
    if (userData?.usuarioDefaultId && userData?.equipeId === "sem equipe") {
      setUsuarioDefaultId(userData.usuarioDefaultId);
    } else if (userData?.equipeId === "solicitacao enviada") {
      window.location.href = "/primeiroAcesso/escolherequipe/saladeespera";
    } else {
      localStorage.clear();
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    handleApiGetEquipes();
  }, []);

  async function handleApiGetEquipes() {
    try {
      const response = await api.get("/buscarEquipes", {});

      if (response.status === 200) {
        setArrayEquipes(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingPage(false);
    }
  }

  async function handleApiEnviarSolicitacao(equipeId) {
    try {
      const response = await api.post("/solicitacaoEquipe", {
        usuarioDefaultId,
        equipeId,
      });

      if (response.status === 201) {
        localStorage.setItem("login", JSON.stringify(response.data));
        window.location.href = "/primeiroAcesso/escolherequipe/saladeespera";
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleCloseModal = (equipeId) => {
    setOpenModalEquipe((prevState) => ({
      ...prevState,
      [equipeId]: false,
    }));
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxTitulo}>
        <Typography sx={styles.titulo}>Escolha sua equipe</Typography>
        <Box sx={styles.baseTitulo} />
      </Box>
      {!loadingPage && (
        <>
          <Box sx={styles.boxCenter}>
            {arrayEquipes?.map((equipe, index) => {
              return (
                <>
                  <Box key={equipe.id} sx={styles.boxAreaCardEquipe}>
                    <motion.div
                      className="motionDiv"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: 0.5 + 0.2 * index,
                          ease: "easeInOut",
                        },
                      }}
                      whileHover={{ scale: 1.04 }}
                    >
                      <Card
                        sx={styles.boxEquipe}
                        onClick={() => {
                          setOpenModalEquipe((prevState) => ({
                            ...prevState,
                            [equipe.id]: true,
                          }));
                        }}
                      >
                        <Box sx={styles.blurBackground} />
                        <Box sx={styles.etiqueta} />
                        <Box sx={styles.boxTituloCard}>
                          <ControlCameraIcon
                            sx={{
                              color: "#F3A913",
                              fontSize: "18px",
                              mb: "-10px",
                            }}
                          />
                          <Typography
                            sx={{
                              ...styles.titulo,
                              maxWidth: "270px",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {equipe?.nome}
                          </Typography>
                          <Box sx={{ ...styles.baseTitulo, width: "85%" }} />
                        </Box>
                        <Box sx={styles.boxBaseEquipe}>
                          <Box sx={{ ...styles.boxRodapeEquipe, ml: "10px" }}>
                            <CalendarMonthOutlinedIcon
                              sx={{ color: "#F3A913" }}
                            />
                            <Typography sx={styles.textoDefault}>
                              Programações: {equipe?.Programacao?.length}
                            </Typography>
                          </Box>
                          <Box sx={{ ...styles.boxRodapeEquipe, mr: "16px" }}>
                            <GroupsOutlinedIcon sx={{ color: "#F3A913" }} />
                            <Typography sx={styles.textoDefault}>
                              Membros: {equipe?.UsuarioDefault?.length + 1}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </motion.div>
                  </Box>

                  <Modal
                    key={equipe.id + index}
                    open={openModalEquipe[equipe.id]}
                    onClose={() => {
                      handleCloseModal(equipe.id);
                    }}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                      backdrop: {
                        timeout: 500,
                      },
                    }}
                  >
                    <Fade in={openModalEquipe[equipe.id]}>
                      <Box
                        sx={{
                          ...styles.boxModalAvisos,
                          "&:focus-visible": { outline: "none" },
                        }}
                      >
                        <IconButton
                          onClick={() => {
                            handleCloseModal(equipe.id);
                          }}
                          sx={{ position: "absolute", top: 4, right: 0 }}
                        >
                          <Close sx={{ fontSize: "26px", color: "#ffffff" }} />
                        </IconButton>
                        <Box sx={styles.boxConteudoModalAvisos}>
                          <Box sx={styles.boxAreaTituloModalAvisos}>
                            <Box sx={styles.boxTituloModalAvisos}>
                              <Typography
                                sx={{
                                  ...styles.tituloModalAvisos,
                                  maxWidth: "270px",
                                  textOverflow: "ellipsis",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {equipe?.nome}
                              </Typography>
                              <Box sx={{ ...styles.baseTituloModalAvisos }} />
                            </Box>
                          </Box>
                          <Box sx={styles.boxModalAreaInfoEquipe}>
                            <Avatar
                              src={equipe?.usuarioHost?.foto || undefined}
                              sx={styles.estiloAvatar}
                            >
                              {equipe?.usuarioHost?.foto ? null : (
                                <>
                                  {equipe?.usuarioHost?.nome
                                    ?.charAt(0)
                                    ?.toUpperCase()}
                                </>
                              )}
                            </Avatar>

                            <Box
                              sx={{
                                ...styles.boxRodapeEquipe,
                                mr: "16px",
                                mt: "4px",
                              }}
                            >
                              <FlagOutlinedIcon sx={{ color: "#F3A913" }} />
                              <Typography
                                sx={{
                                  ...styles.textoDefault,
                                  maxWidth: "270px",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                }}
                              >
                                {equipe?.usuarioHost?.nome}
                              </Typography>
                            </Box>
                          </Box>

                          <Box sx={{ ...styles.boxBaseEquipe, width: "90%" }}>
                            <Box sx={{ ...styles.boxRodapeEquipe }}>
                              <CalendarMonthOutlinedIcon
                                sx={{ color: "#F3A913" }}
                              />
                              <Typography sx={styles.textoDefault}>
                                Programações: {equipe?.Programacao?.length}
                              </Typography>
                            </Box>
                            <Box sx={{ ...styles.boxRodapeEquipe, mr: "16px" }}>
                              <GroupsOutlinedIcon sx={{ color: "#F3A913" }} />
                              <Typography sx={styles.textoDefault}>
                                Servindo: {equipe?.UsuarioDefault?.length + 1}
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              width: "90%",
                              maxHeight: "150px",
                              mb: "4px",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              flexDirection: "column",
                            }}
                          >
                            <Box sx={{ ...styles.boxRodapeEquipe, mr: "20px" }}>
                              <DescriptionOutlinedIcon
                                sx={{ color: "#F3A913" }}
                              />
                              <Typography
                                sx={{
                                  ...styles.textoDefault,
                                  textTransform: "uppercase",
                                }}
                              >
                                Descrição
                              </Typography>
                            </Box>
                            <Typography
                              sx={{
                                ...styles.textoDefault,
                                textAlign: "center",
                                fontSize: "13px",
                              }}
                            >
                              {equipe?.descricao}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              height: "40px",
                              mb: "10px",
                            }}
                          >
                            <Button
                              sx={{ ...styles.botaoDefault, width: "100%" }}
                              onClick={() => {
                                handleApiEnviarSolicitacao(equipe.id);
                              }}
                            >
                              Enviar solicitação
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Fade>
                  </Modal>
                </>
              );
            })}
            {arrayEquipes?.length === 0 && (
              <>
                <Box sx={styles.boxInfo}>
                  <Typography
                    sx={{ ...styles.textoDefault, textAlign: "center" }}
                  >
                    Nenhuma equipe existente no momento
                  </Typography>
                  <Typography
                    sx={{ ...styles.textoDefault, textAlign: "center" }}
                  >
                    Aguarde a criação de equipes para solicitar entrada
                  </Typography>
                </Box>
              </>
            )}
          </Box>

          <Button
            sx={{ ...styles.botaoDefault, mt: "20px" }}
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            Voltar para a tela inicial
          </Button>
          <Box sx={{ width: "100dvw", height: "50px" }} />
        </>
      )}
    </Box>
  );
};

export default EscolherEquipe;
