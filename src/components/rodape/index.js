import { Box, Typography } from "@mui/material";

const styles = {
  configBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    background: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "48px",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9,
  },
  descricao: {
    color: "#ffffff",
    fontSize: "12px",
    lineHeight: "143%",
    letterSpacing: "0.17px",
    textAlign: "center",
  },
};

const Rodape = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.descricao}>
        Ao se inscrever, você concorda com os Termos e Condições e Política de
        Privacidade.
      </Typography>
      <Typography sx={styles.descricao}>
        ©2024 Todos os direitos reservados - Contato:
        suportedevescalix@gmail.com
      </Typography>
    </Box>
  );
};
export default Rodape;
