import {
  Close,
  KeyboardArrowRightOutlined,
  Person,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Chip,
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
};

const ModalEscalarMembro = (params) => {
  const { openModalEscalarMembro, setOpenModalEscalarMembro } = params;
  const [OpenModalConfirmarEscolha, setOpenModalConfirmarEscolha] =
    useState(false);

  const [membros, setMembros] = useState([
    {
      membro: "João Vinícius Soares",
      disponivel: true,
      possuiTag: true,
    },
    {
      membro: "Samuel Cardoso Félix",
      disponivel: true,
      possuiTag: true,
    },
    {
      membro: "Hatus Yodes Santos",
      disponivel: true,
      possuiTag: false,
    },
    { membro: "Gabriela Santos Eugênio", disponivel: true, possuiTag: false },
    { membro: "Renata Xavier Silva", disponivel: false, possuiTag: true },
    { membro: "Samuel Silva Xavier", disponivel: false, possuiTag: false },
  ]);

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
                  Culto Celebração - ZS16
                </Typography>
                <Typography sx={styles.dataText}>
                  <Box sx={styles.boxDoubleIcon}>
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
              <Box sx={styles.boxOpcoesPerfil}>
                {membros?.map(({ membro, disponivel, possuiTag }, index) => (
                  <Button
                    onClick={() => {
                      if (!disponivel || !possuiTag) {
                        setOpenModalConfirmarEscolha(true);
                      } else {
                        setOpenModalEscalarMembro(false);
                      }
                    }}
                    sx={styles.botaoCardPerfil}
                  >
                    <Avatar sx={styles.avatarMembro}>
                      <Person sx={{ fontSize: "24px" }} />
                    </Avatar>
                    <Box sx={styles.boxInfoPerfilCard}>
                      <Typography sx={styles.textNamePerfil}>
                        {membro}
                      </Typography>
                      <Box sx={styles.boxChipPerfil}>
                        {disponivel ? (
                          <Chip label="Disponível" sx={styles.chipPerfil} />
                        ) : (
                          <Chip
                            label="Indisponível"
                            sx={{ ...styles.chipPerfil, background: "#D32F2F" }}
                          />
                        )}
                        {possuiTag ? (
                          <Chip label="Câmera Central" sx={styles.chipPerfil} />
                        ) : (
                          <Chip
                            label="Câmera Central"
                            sx={{ ...styles.chipPerfil, background: "#D32F2F" }}
                          />
                        )}
                      </Box>
                    </Box>
                    <KeyboardArrowRightOutlined sx={styles.iconCardPerfil} />
                  </Button>
                ))}
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
                    setOpenModalConfirmarEscolha(false);
                    setOpenModalEscalarMembro(false);
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
export default ModalEscalarMembro;
