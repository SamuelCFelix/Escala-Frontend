import { Box, ButtonBase, Stack, Typography, styled } from "@mui/material";
import imagemLider from "../../img/zs-lider.JPG";
import imagemServo from "../../img/zs-servo.JPG";

const styles = {
  container: {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto",
    background: "#000000",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  boxTitulo: {
    width: "25%",
    height: "10%",
    marginBottom: "30px",
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
    height: "3.5%",
  },
  boxTituloCards: {
    width: "25%",
    height: "10%",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  tituloCards: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.25px",
    margin: "8% 0%",
  },
  baseTituloCards: {
    background: "#F3A913",
    width: "80%",
    height: "3.8%",
  },
  boxCenter: {
    width: "50%",
    height: "70%",
  },
  stackopcoes: {
    background: "green",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxLider: {
    width: "49%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
  },
  boxServo: {
    background: "blue",
    width: "49%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
  },
};

const PrimerioAcesso = () => {
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "10px",
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  return (
    <Box sx={styles.container}>
      <Box sx={styles.boxTitulo}>
        <Typography sx={styles.titulo}>Escolha o seu perfil</Typography>
        <Box sx={styles.baseTitulo} />
      </Box>
      <Box sx={styles.boxCenter}>
        <Stack direction={"row"} sx={styles.stackopcoes}>
          <Box sx={styles.boxLider}>
            <ImageButton
              focusRipple
              key={"imagemLider"}
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${imagemLider})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Box sx={styles.boxTituloCards}>
                <Typography sx={styles.tituloCards}>Líder</Typography>
                <Box sx={styles.baseTituloCards} />
              </Box>
            </ImageButton>
          </Box>
          <Box sx={styles.boxServo}>
            <Box sx={styles.boxTituloCards}>
              <Typography sx={styles.tituloCards}>Servo</Typography>
              <Box sx={styles.baseTituloCards} />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default PrimerioAcesso;
