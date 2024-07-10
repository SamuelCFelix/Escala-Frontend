import {
  CloudOutlined,
  Person,
  PersonAdd,
  ReportProblemOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";

const styles = {
  boxAviso: {
    background: "#1B1B1B",
    display: "flex",
    width: "376px",
    height: "70px",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "6px",
    padding: "6px 8px",
    border: "1px solid transparent",
    borderRadius: "4px",
    boxSizing: "border-box",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(243, 169, 19, 0.2)",
    },
  },
  avatarIcon: {
    background: "#F3A913",
    width: "40px",
    height: "40px",
  },
  boxAreaConteudoAviso: {
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 46px)",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxAreaTituloDate: {
    width: "100%",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dataTextTituloAviso: {
    color: "#F3A913",
    fontSize: "12px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
    textAlign: "left",
    width: "calc(100% - 70px)",
  },
  dataTextAviso: {
    color: "#BDBDBD",
    fontSize: "11px",
    lineHeight: "12px",
    letterSpacing: "0.17px",
    textAlign: "left",
  },
  dataTextDateAviso: {
    color: "#ffffff",
    fontSize: "9px",
    lineHeight: "24px",
    letterSpacing: "0.17px",
  },
  iconConfigAviso: {
    position: "absolute",
    right: "-28px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "26px",
    height: "26px",
    "&.MuiButtonBase-root.MuiIconButton-root:hover": {
      backgroundColor: "rgba(243, 169, 19, 0.2)",
    },
  },
  boxTextDestaqueAviso: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "6px",
  },
  boxTextoDesfalque: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "4px",
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
    height: "70vh",
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
  boxBotoesModal: {
    display: "flex",
    width: "100%",
    gap: "6px",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: "10px 0px",
    mr: "20px",
  },
};

const AvisoNaoPreenchido = () => {
  const [OpenModalCandidatar, setOpenModalCandidatar] = useState(false);

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
      <Box position={"relative"} mb={"10px"}>
        <Button
          onClick={() => {
            setOpenModalCandidatar(true);
          }}
          sx={{ ...styles.boxAviso, height: "80px" }}
        >
          <Avatar
            sx={{
              ...styles.avatarIcon,
              background: "#D32F2F",
            }}
          >
            <ReportProblemOutlined
              sx={{ fontSize: "24px", color: "#F3A913" }}
            />
          </Avatar>
          <Box sx={styles.boxAreaConteudoAviso}>
            <Box sx={styles.boxAreaTituloDate}>
              <Typography
                sx={{ ...styles.dataTextTituloAviso, color: "#D32F2F" }}
              >
                NÃO PREENCHIDO
              </Typography>
              <Typography sx={styles.dataTextDateAviso}>
                17:26 - 28/02/24
              </Typography>
            </Box>
            <Box sx={styles.boxTextDestaqueAviso}>
              <Typography
                sx={{
                  ...styles.dataTextAviso,
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                A escala está com desfalque:
              </Typography>
            </Box>
            <Box sx={styles.boxTextoDesfalque}>
              <Typography sx={styles.dataTextAviso}>Culto:</Typography>
              <Typography sx={{ ...styles.dataTextAviso, color: "#F3CE24" }}>
                Culto de Doutrina
              </Typography>
            </Box>
            <Box sx={styles.boxTextoDesfalque}>
              <Typography sx={styles.dataTextAviso}>Tag:</Typography>
              <Typography sx={{ ...styles.dataTextAviso, color: "#F3CE24" }}>
                Câmera Lateral - Esquerda
              </Typography>
            </Box>
            <Box sx={styles.boxTextoDesfalque}>
              <Typography sx={styles.dataTextAviso}>Data/Horário:</Typography>
              <Typography sx={{ ...styles.dataTextAviso, color: "#F3CE24" }}>
                19:00 - Quinta-Feira - 16/05/24
              </Typography>
            </Box>
          </Box>
        </Button>
        <IconButton sx={styles.iconConfigAviso}>
          <SettingsOutlined
            sx={{
              color: "#F3A913",
              fontSize: "18px",
            }}
          />
        </IconButton>
      </Box>
      <Modal
        open={OpenModalCandidatar}
        onClose={() => {
          setOpenModalCandidatar(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={OpenModalCandidatar}>
          <Box
            sx={{
              ...styles.boxModal,
              background: "#1B1B1B",
              width: "400px",
              height: "auto",
            }}
          >
            <Box sx={{ ...styles.boxConteudoModal, gap: "0px" }}>
              {boxTituloCards("Preencher programação")}
              <Typography sx={styles.dataText}>
                Ao confirmar, você estará assumindo o compromisso de
                comparecimento e será escalado para esse dia
              </Typography>

              <Box sx={styles.boxBotoesModal}>
                <Button
                  onClick={() => {
                    setOpenModalCandidatar(false);
                  }}
                  sx={styles.botaoDefault}
                >
                  {" "}
                  Cancelar
                </Button>
                <Button
                  onClick={() => {
                    setOpenModalCandidatar(false);
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
    </>
  );
};
export default AvisoNaoPreenchido;
