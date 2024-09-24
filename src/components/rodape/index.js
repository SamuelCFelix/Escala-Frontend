import { Box, Typography } from "@mui/material";

const styles = {
  configBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    background: "#141414f1",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9,
    overFlow: "hidden",
  },
  descricao: {
    color: "#ffffff",
    fontSize: "0.7rem",
    lineHeight: "143%",
    letterSpacing: "0.17px",
    textAlign: "center",
    padding: "2px 10px",
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
