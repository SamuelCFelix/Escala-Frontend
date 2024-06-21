import { Close, Person, SettingsOutlined } from "@mui/icons-material";
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
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
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
    right: "-30px",
    top: "50%",
    transform: "translateY(-50%)",
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
    gap: "4px",
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
  avatarMembro: {
    width: "40px",
    height: "40px",
    background: "#F3A913",
  },
  textAvisoName: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
  },
  textAviso: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "12px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
  },
  boxConteudoTextModal: {
    border: "1px solid rgba(243, 169, 19, 0.7)",
    borderRadius: "5px",
    width: "90%",
    minHeight: "12vh",
    height: "auto",
    maxHeight: "30vh",
    mb: "12px",
    overflowY: "auto",
  },
};

const AvisoDefault = () => {
  const [openModalAviso, setOpenModalAviso] = useState(false);

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
            setOpenModalAviso(true);
          }}
          sx={styles.boxAviso}
        >
          <Avatar sx={styles.avatarIcon}>
            <Person sx={{ fontSize: "24px" }} />
          </Avatar>
          <Box sx={styles.boxAreaConteudoAviso}>
            <Box sx={styles.boxAreaTituloDate}>
              <Typography sx={styles.dataTextTituloAviso}>
                AVISO IMPORTANTE DO PASTOR!!!
              </Typography>
              <Typography sx={styles.dataTextDateAviso}>
                17:26 - 28/02/24
              </Typography>
            </Box>
            <Typography sx={styles.dataTextAviso}>
              O pastor está convocando todos os servos apaixonados para
              comparecerem na igreja 4.0 para uma reunião de alinhamento. Sua
              presença é indispensável, pois bla bl...
            </Typography>
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
        open={openModalAviso}
        onClose={() => {
          setOpenModalAviso(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalAviso}>
          <Box sx={styles.boxModal}>
            <Box sx={styles.boxConteudoModal}>
              {boxTituloCards("Aviso")}
              <IconButton
                onClick={() => {
                  setOpenModalAviso(false);
                }}
                sx={{ position: "absolute", top: 4, right: 0 }}
              >
                <Close sx={{ fontSize: "26px", color: "#ffffff" }} />
              </IconButton>
              <Avatar sx={styles.avatarMembro} />
              <Typography sx={styles.textAvisoName}>
                João Vinícius Soarez
                <FlagOutlinedIcon sx={{ color: "#F3A913", fontSize: "14px" }} />
              </Typography>
              <Typography
                sx={{
                  ...styles.textAviso,
                  color: "#F3A913",
                  fontSize: "14px",
                }}
              >
                AVISO IMPORTANTE DO PASTOR!!!
              </Typography>
              <Box sx={styles.boxConteudoTextModal}>
                <Typography sx={{ ...styles.textAviso, margin: "10px" }}>
                  {`O pastor está convocando todos os servos apaixonados para
                  comparecerem na igreja 4.0 para uma reunião de alinhamento.
                  Sua presença é indispensável, pois bla bl...O pastor está
                  convocando todos os servos apaixonados para comparecerem na
                  igreja 4.0 para uma reunião de alinhamento. Sua presença é
                  indispensável, pois bla bl...O pastor está convocando todos os
                  servos apaixonados para comparecerem na igreja 4.0 para uma
                  reunião de alinhamento. Sua presença é indispensável, pois bla
                  bl...O pastor está convocando todos os presença é
                  indispensável, pois bla bl...O pastor está convocando todos os
                  servos apaixonados para comparecerem na igreja 4.0 para uma
                  reunião. indispensável, pois bla bl...O pastor está convocando
                  todos os servos apaixonados para comparecerem na igreja 4.0
                  para uma reunião.`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default AvisoDefault;
