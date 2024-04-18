import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Card,
  Fade,
  Modal,
  Typography,
} from "@mui/material";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { motion } from "framer-motion";
import { useState } from "react";

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
    overflowY: "auto",
    overflowX: "hidden",
  },
  boxTitulo: {
    width: "384px",
    height: "72px",
    mb: "16px",
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
    height: "3.8%",
  },
  boxCenter: {
    width: "500px",
    minHeight: "500px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "145px",
  },
  textoDefault: {
    fontSize: "14px",
    color: "#ffffff",
    lineHeight: "24px",
    letterSpacing: "0.17px",
  },
  botaoDefault: {
    display: "flex",
    width: "140px",
    height: "30px",
    padding: "0px 40px",
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
  boxAreaCardEquipe: {
    display: "flex",
    position: "relative",
    width: "400px",
    cursor: "pointer",
  },
  boxEquipe: {
    background: "#000000",
    width: "400px",
    minHeight: "120px",
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
    height: "395px",
    boxShadow: 24,
  },
  boxConteudoModalAvisos: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
    height: "2.5%",
  },
};

const EscolherEquipe = () => {
  const [openModalEquipe, setOpenModalEquipe] = useState(false);

  const handleCloseModal = () => {
    setOpenModalEquipe(false);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxTitulo}>
        <Typography sx={styles.titulo}>Escolha sua equipe</Typography>
        <Box sx={styles.baseTitulo} />
      </Box>
      <Box sx={styles.boxCenter}>
        <Box sx={styles.boxAreaCardEquipe}>
          <motion.div
            className="motionDiv"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.04 }}
          >
            <Card
              sx={styles.boxEquipe}
              onClick={() => {
                setOpenModalEquipe(true);
              }}
            >
              <Box sx={styles.blurBackground} />
              <Box sx={styles.etiqueta} />
              <Box
                sx={{
                  ...styles.boxTitulo,
                  mb: "0px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ControlCameraIcon
                  sx={{ color: "#F3A913", fontSize: "18px", mb: "-10px" }}
                />
                <Typography sx={styles.titulo}>Filmagem</Typography>
                <Box sx={{ ...styles.baseTitulo, width: "85%" }} />
              </Box>
              <Box sx={styles.boxBaseEquipe}>
                <Box sx={{ ...styles.boxRodapeEquipe, ml: "10px" }}>
                  <CalendarMonthOutlinedIcon sx={{ color: "#F3A913" }} />
                  <Typography sx={styles.textoDefault}>
                    Programações: 4
                  </Typography>
                </Box>
                <Box sx={{ ...styles.boxRodapeEquipe, mr: "16px" }}>
                  <GroupsOutlinedIcon sx={{ color: "#F3A913" }} />
                  <Typography sx={styles.textoDefault}>Servindo: 22</Typography>
                </Box>
              </Box>
            </Card>
          </motion.div>
        </Box>
      </Box>

      <Modal
        open={openModalEquipe}
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
        <Fade in={openModalEquipe}>
          <Box
            sx={{
              ...styles.boxModalAvisos,
              "&:focus-visible": { outline: "none" },
            }}
          >
            <Box sx={styles.boxConteudoModalAvisos}>
              <Box sx={styles.boxAreaTituloModalAvisos}>
                <Box sx={styles.boxTituloModalAvisos}>
                  <Typography sx={styles.tituloModalAvisos}>
                    Filmagem
                  </Typography>
                  <Box sx={styles.baseTituloModalAvisos} />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "80%",
                  height: "84px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: "#F3A913",
                    width: "50px",
                    height: "50px",
                    mr: "10px",
                  }}
                >
                  SF
                </Avatar>

                <Box sx={{ ...styles.boxRodapeEquipe, mr: "16px", mt: "4px" }}>
                  <FlagOutlinedIcon sx={{ color: "#F3A913" }} />
                  <Typography sx={styles.textoDefault}>
                    Samuel Cardoso Félix
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ ...styles.boxBaseEquipe, width: "90%" }}>
                <Box sx={{ ...styles.boxRodapeEquipe }}>
                  <CalendarMonthOutlinedIcon sx={{ color: "#F3A913" }} />
                  <Typography sx={styles.textoDefault}>
                    Programações: 4
                  </Typography>
                </Box>
                <Box sx={{ ...styles.boxRodapeEquipe, mr: "16px" }}>
                  <GroupsOutlinedIcon sx={{ color: "#F3A913" }} />
                  <Typography sx={styles.textoDefault}>Servindo: 22</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "90%",
                  height: "150px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ ...styles.boxRodapeEquipe, mr: "20px" }}>
                  <DescriptionOutlinedIcon sx={{ color: "#F3A913" }} />
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
                  Esta equipe de filmagem está comprometida em capturar os
                  cultos e transmiti-los online com excelência técnica. Seu
                  objetivo é garantir que as mensagens sejam transmitidas de
                  forma clara e eficaz.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                }}
              >
                <Button
                  sx={{ ...styles.botaoDefault, width: "100%" }}
                  onClick={() => {
                    window.location.href =
                      "/primeiroAcesso/escolherequipe/saladeespera";
                  }}
                >
                  Enviar solicitação
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default EscolherEquipe;
