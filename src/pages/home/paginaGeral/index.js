import { Box, Button, Divider, Typography } from "@mui/material";

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
    width: "446px",
    height: "70vh",
    borderRadius: "10px",
  },
  areaBoxMid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "446px",
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
  titulo: {
    color: "#ffffff",
    textTransform: "uppercase",
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
    /* background: "red", */
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "calc(100% - 100px)",
    alignItems: "center",
    justifyContent: "center",
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
    width: "378px",
    height: "1px",
  },
  /* boxBotaoCard: {
    background: "blue",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  }, */
};

const PaginaGeral = () => {
  const boxTituloCards = (titulo) => {
    return (
      <Box sx={styles.areaBoxTitulo}>
        <Box sx={styles.boxTitulo}>
          <Typography sx={styles.titulo}>{titulo}</Typography>
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
        <Box sx={styles.areaConteudoCard}> </Box>
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
