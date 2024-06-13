import {
  CalendarMonthOutlined,
  PersonRemoveAlt1Outlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

const styles = {
  configBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 20px",
    gap: "30px",
    mb: "68px",
  },
  boxCardDefault: {
    background: "#000000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minWidth: "446px",
    height: "70vh",
    borderRadius: "10px",
  },
  areaBoxMid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "446px",
    height: "70vh",
    borderRadius: "10px",
  },
  boxCardDefaultMid: {
    background: "#000000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "446px",
    height: "34vh",
    borderRadius: "10px",
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
  textPerfilProximoCulto: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
    paddingLeft: "6px",
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
    height: "calc(100% - 100px)",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxAreaBotaoCard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "48px",
    alignItems: "center",
    justifyContent: "space-between",
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
  divider: {
    borderColor: "#565656",
    width: "95%",
    height: "1px",
  },
  boxInfoProximoCulto: {
    /*  background: "blue", */
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "70px",
    gap: "10px",
    paddingTop: "10px",
  },
  boxEscalaProximoCulto: {
    /* background: "green", */
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "calc(100% - 80px)",
    gap: "10px",
    overflowY: "auto",
  },
  areaPerfilEscalado: {
    /* background: "red", */
    position: "relative",
    display: "flex",
    width: "calc(100% - 24px)",
    height: "66px",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  avatarProximoCulto: {
    background: "#F3A913",
    width: "50px",
    height: "50px",
  },
  boxInfoPerfilProximoCulto: {
    /* background: "blue", */
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "calc(100% - 90px)",
  },
};

const PaginaGeral = () => {
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

  const boxBotaoCards = (titulo) => {
    return (
      <Box sx={styles.boxAreaBotaoCard}>
        <Divider sx={styles.divider} />
        <Button variant="contained" sx={{ ...styles.botaoDefault, mb: "8px" }}>
          {titulo}
        </Button>
      </Box>
    );
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxCardDefault}>
        {boxTituloCards("Próximo Culto")}
        <Box sx={styles.areaConteudoCard}>
          <Box sx={styles.boxInfoProximoCulto}>
            <Typography
              sx={{ ...styles.textTitulo, fontSize: "18px", fontWeight: 600 }}
            >
              CULTO CELEBRAÇÃO
            </Typography>
            <Typography sx={{ ...styles.textTitulo, fontSize: "18px" }}>
              17:00
            </Typography>
            <Typography
              sx={{
                ...styles.textTitulo,
                alignSelf: "flex-start",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <CalendarMonthOutlined
                sx={{ color: "#F3A913", fontSize: "16px" }}
              />
              19/05/24 - DOMINGO
            </Typography>
            <Divider
              sx={{
                ...styles.divider,
                justifySelf: "flex-start",
                position: "absolute",
                bottom: 0,
              }}
            />
          </Box>
          <Box sx={styles.boxEscalaProximoCulto}>
            <Box sx={styles.areaPerfilEscalado}>
              <Avatar sx={styles.avatarProximoCulto} />
              <Box sx={styles.boxInfoPerfilProximoCulto}>
                <Typography sx={styles.textPerfilProximoCulto}>
                  João Vinícius
                </Typography>
                <Typography
                  sx={{
                    ...styles.textPerfilProximoCulto,
                    color: "#F3CE24",
                    fontSize: "14px",
                  }}
                >
                  Cortes de Câmera
                </Typography>
              </Box>
              <IconButton>
                <PersonRemoveAlt1Outlined
                  sx={{ color: "#D32F2F", fontSize: "24px" }}
                />
              </IconButton>
              <Divider
                sx={{
                  ...styles.divider,
                  width: "100%",
                  position: "absolute",
                  bottom: 0,
                }}
              />
            </Box>
          </Box>
        </Box>
        {boxBotaoCards("Editar escala")}
      </Box>
      <Box sx={styles.areaBoxMid}>
        <Box sx={styles.boxCardDefaultMid}>
          {boxTituloCards("Avisos")}
          <Box sx={styles.areaConteudoCard}> </Box>
          {boxBotaoCards("Criar aviso")}
        </Box>
        <Box sx={styles.boxCardDefaultMid}>
          {boxTituloCards("Eventos")}
          <Box sx={styles.areaConteudoCard}> </Box>
          {boxBotaoCards("criar evento")}
        </Box>
      </Box>
      <Box sx={styles.boxCardDefault}>
        {boxTituloCards("Informações")}
        <Box sx={styles.areaConteudoCard}> </Box>
        {boxBotaoCards("Cadastrar disponibilidade")}
      </Box>
    </Box>
  );
};
export default PaginaGeral;
