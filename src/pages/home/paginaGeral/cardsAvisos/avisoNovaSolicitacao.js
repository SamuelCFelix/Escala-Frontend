import { Person, PersonAdd, SettingsOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";

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
};

const AvisoNovaSolicitacao = () => {
  return (
    <Box position={"relative"} mb={"10px"}>
      <Box sx={styles.boxAviso}>
        <Avatar
          sx={{
            ...styles.avatarIcon,
            background: "#2E7D32",
          }}
        >
          <PersonAdd sx={{ fontSize: "24px" }} />
        </Avatar>
        <Box sx={styles.boxAreaConteudoAviso}>
          <Box sx={styles.boxAreaTituloDate}>
            <Typography
              sx={{ ...styles.dataTextTituloAviso, color: "#2E7D32" }}
            >
              NOVA SOLICITAÇÃO DE ENTRADA
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
              Samuel Cardoso Félix
            </Typography>
            <Typography sx={styles.dataTextAviso}>
              solicitou entrada na equipe.
            </Typography>
          </Box>
          <Typography sx={styles.dataTextAviso}>
            Vá para a aba de Equipe {`>`} Solicitações de Entrada e Aceite ou
            Recuse a solicitação.
          </Typography>
        </Box>
      </Box>
      <IconButton sx={styles.iconConfigAviso}>
        <SettingsOutlined
          sx={{
            color: "#F3A913",
            fontSize: "18px",
          }}
        />
      </IconButton>
    </Box>
  );
};
export default AvisoNovaSolicitacao;
