import { Close, Search } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";

const styles = {
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
};

const ModalEscalarMembro = (params) => {
  const { OpenModalEscalarMembro, setOpenModalEscalarMembro } = params;

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
    <Modal
      open={OpenModalEscalarMembro}
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
      <Fade in={OpenModalEscalarMembro}>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "90%",
                gap: "10px",
                mb: "16px",
              }}
            >
              <Typography sx={styles.dataText}>
                <ChurchOutlinedIcon sx={styles.dataIcon} />
                Culto Celebração - ZS16
              </Typography>
              <Typography sx={styles.dataText}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CalendarMonthOutlinedIcon sx={styles.dataIcon} />
                  <AccessTimeOutlinedIcon sx={styles.dataIconInsid} />
                </Box>
                Domingo - 16:00
              </Typography>
              <Typography sx={styles.dataText}>
                <SellOutlinedIcon sx={styles.dataIcon} />
                Câmera Central
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
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
export default ModalEscalarMembro;
